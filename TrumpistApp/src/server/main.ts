import * as express from "express";

import * as bodyParser from "body-parser";

import * as dal from "./dal";

const app = express();

app.use(bodyParser.json());

// app.configure(function() {
// });


app.get("/api/tramps", wrap(async function() {
    return await dal.getAllTramps();
}));

// app.post('/', function(request, response) {
//   console.log(request.body);
// });

app.post("/api/addTrampRequest", wrap(async function(req, res) {
  console.log(req.body);
  return await dal.addTrampRequest(req.body);
}));

app.post("/api/updateTrampRequest", wrap(async function(req, res) {
  console.log(req.body);
  return await dal.updateTrampRequest(req.body);
}));


function wrap(fn) {
  return function(req, res) {
    try {
      const retVal = fn(req, res);

      if (retVal && retVal.then) {
        retVal
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json({ error: err.message });
          });
      }
    } catch (err) {
      res.json({ error: err.message });
    }
  };
}

app.listen(3000, function(){
    console.log("Server is running ABCD");
});
