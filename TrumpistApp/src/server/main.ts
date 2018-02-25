import * as express from "express";

import * as dal from "./dal";

const app = express();

<<<<<<< HEAD
app.get(
  "/api/tremps",
  wrap(async function() {
    return await dal.getAllTremps();
  })
);
=======
app.get("/api/tramps", wrap(async function() {
    return await dal.getAllTramps();
}));
>>>>>>> dded1914b5bee2d3a72d6025d50842195b3a5d60

function wrap(fn) {
  return function(req, res) {
    try {
      const retVal = fn();

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

<<<<<<< HEAD
app.listen(3001, function() {
  console.log("Server is running ABC");
});
=======
app.listen(3000, function(){
    console.log("Server is running ABC");
});
>>>>>>> dded1914b5bee2d3a72d6025d50842195b3a5d60
