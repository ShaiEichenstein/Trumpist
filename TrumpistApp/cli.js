const child_process = require("child_process");
const mongodb = require("mongodb");
var fs = require('fs');

const connect = promisify(mongodb.MongoClient.connect);

mongodb.Cursor.prototype.toArrayAsync = promisify(mongodb.Cursor.prototype.toArray);

const command = process.argv[2];

if (command == "start") {
  start();
}

async function start() {
  await loadMongo();

  console.log("Compiling server")
  await spawn("node_modules\\.bin\\tsc", [
    "-p",
    "src/server/tsconfig.json"
  ], {
      shell: true,
      stdio: "inherit",
    });

  console.log("Running server")
  /*spawn("node", ["src/server_out/server/main.js"], {
    shell: true,
    stdio: "inherit",
  });*/
  spawn("node_modules\\.bin\\nodemon", [
    "src/server_out/server/main.js"
  ], {
      shell: true,
      stdio: "inherit",
    });

  console.log("Running client")
  spawn("ng", ["serve", "--proxy-config", "proxy.conf.json"], {
    shell: true,
    stdio: "inherit",
  });

  console.log("Watching server compilation")
  spawn("node_modules\\.bin\\tsc", [
    "-p",
    "src/server/tsconfig.json",
    "-w"
  ], {
      shell: true,
      stdio: "inherit",
    });

  console.log("nodemon is running")


}

function spawn(app, args, options) {
  return new Promise((resolve, reject) => {
    const p = child_process.spawn(app, args, options);

    p.on("close", function () {
      resolve();
    });

    p.on("error", function (err) {
      reject(err);
    })
  });
}

async function loadMongo() {
  const mongoPath = process.env.MONGO_PATH;
  console.log("mongo path: " + mongoPath);

  const dir = 'src/data';
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  await spawn(mongoPath + "\\bin\\mongod.exe", [
    "-dbpath",
    "src/data"
  ], {
      shell: true,
      stdio: "inherit",
    });

  console.log("Connecting to mongo ");
  const client = await connect("mongodb://localhost:27017");
  console.log("mongo Connected");

  const db = client.db("trampistdb");

  const trampRequests = db.collection("trampRequests");

  /*var myobj = {
    driverLastName: "אייכנשטיין",
    driverFirstName: "שי",
    driverGender: "זכר",
  };
  trampRequests.insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("DONE!!!!");
  });*/
  console.log("**********************************");
  var jsonDataFile = JSON.parse(fs.readFileSync('src/server/dataToLoad.json', 'utf8'));
  //console.log(jsonDataFile);
  trampRequests.insertMany(jsonDataFile, function(err, res) {
    if (err) throw err;
    console.log("DONE!!!!");
  });
  const trampsArr = await trampRequests.find({}).toArrayAsync();

  for (const tramp of trampsArr) {
    console.log(tramp);
  }

  /*console.log("Closing");
  client.close();*/

}


function promisify(fn) {
  return function () {
    const args = Array.from(arguments);
    const me = this;

    return new Promise(function (resolve, reject) {
      function callback(err, retVal) {
        if (err) {
          reject(err);
          return;
        }

        resolve(retVal);
      }

      args.push(callback);

      fn.apply(me, args);
    });
  }
}