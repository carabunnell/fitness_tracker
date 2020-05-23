//require the express path 
// *******not needed Router??? 
const router = require("express").Router();
const path = require("path");

//need to require a file from config maybe? actually, probably not...


    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    router.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    router.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
module.exports = router;