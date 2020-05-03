// Requiring necessary npm packages
const express = require("express");
// const mongojs =  require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting up port
const PORT = process.env.PORT || 3000;

const db = require("./models");

//creating express app and config
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
//     useNewUrlParser: true
// });

//requireing routes
require("./routes/html-routes.js")(app);

db.Library.create({
        name: "Workout Library"
    })
    .then(dbWorkout => {
        console.lot(dbWorkout);
    })
    .catch(({
        message
    }) => {
        console.log(message);
    });

app.post("/submit", ({
    body
}, res) => {
    db.Workout.create(body)
        .then(({
            _id
        }) => db.Library.findOneAndUpdate({}, {
            $push: {
                books: _id
            }
        }, {
            new: true
        }))
        .then(dbLibrary => {
            res.json(dbLibrary);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});