const router = require("express").Router();
const Workout = require("../models/Exercise");


// app.post("/submit", ({
//     body
// }, res) => {
//     db.Workout.create(body)
//         .then(({
//             _id
//         }) => db.Library.findOneAndUpdate({}, {
//             $push: {
//                 books: _id
//             }
//         }, {
//             new: true
//         }))
//         .then(dbLibrary => {
//             res.json(dbLibrary);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });
router.get("/api/workouts", function (req, res) {
    Workout.find({})
        .sort({ day: 1 })
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
    });
    
    

    module.exports = router;