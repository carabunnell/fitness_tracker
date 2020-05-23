const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    //i don't know what to put here yet....
    {
        day: {
            type: Date,
            default: () => new Date(),
        },
        exercises: [
            {
                name: {
                    type: String,
                    required: "Please input the name of the workout",
                },
                type: {
                    type: String,
                    required: "Please input the type of the workout",
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                duration: {
                    type: Number,
                    required: "Please input the length of the workout.",
                }, 
                distance: {
                    type: Number,
                },
            }
        ]
},
{
    toJSON: {
        virtuals: true,
    }
});

workoutSchema.virtual("length").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const Exercise = mongoose.model("Workout", workoutSchema);

module.exports = Exercise;

//change it to capital W in workout schema
//also change "total diraction "