var express = require('express');
const fs = require('fs');


module.exports = (function () {
    var api = express.Router();
    api.route("/DeleteTache").delete((req, res) => {

        //Recuperation et modification d'un fichier Json 
        fs.readFile('Data/Tache.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            data = JSON.parse(jsonString);
            //Get parameters and remove the item
            data.splice(req.body.index, 1);
            //update file 
            dataUpdated = JSON.stringify(data);
            fs.writeFileSync('Data/Tache.json', dataUpdated);
            //Response to clients
            res.send({ request: true, data });
            res.end();

        })

    });
    return api;
})();