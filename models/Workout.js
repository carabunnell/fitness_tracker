const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //i don't know what to put here yet....
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;