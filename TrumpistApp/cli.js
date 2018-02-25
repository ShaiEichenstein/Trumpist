const child_process = require("child_process");

const command = process.argv[2];

if (command == "start") {
  start();
}

async function start() {
  console.log("Compiling server")
  await spawn("node_modules\\.bin\\tsc", [
    "-p",
    "tsconfig.json"
  ], {
      shell: true,
      stdio: "inherit",
    });

  console.log("Running server")
  spawn("node", ["src/server_out/server/main.js"], {
    shell: true,
    stdio: "inherit",
  });

  console.log("Running client")
  spawn("ng", ["serve", "--proxy-config", "proxy.conf.json", "--open"], {
    shell: true,
    stdio: "inherit",
  });

  console.log("Watching server compilation")
  spawn("node_modules\\.bin\\tsc", [
    "-p",
    "tsconfig.json",
    "-w"
  ], {
      shell: true,
      stdio: "inherit",
    });
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