import * as express from "express";

import * as dal from "./dal";

const app = express();

app.get("/api/tramps", wrap(async function() {
    return await dal.getAllTramps();
}));

function wrap(fn){
    return function(req, res) {
        try {
            const retVal = fn();

            if (retVal && retVal.then) {
                retVal.then(data => {
                    res.json(data);
                }).catch(err => {
                    res.json({error: err.message});
                });
            }
        }
        catch(err){
            res.json({error: err.message});
        }
    }
}

app.listen(3000, function(){
    console.log("Server is running ABC");
});