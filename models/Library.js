const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = Schema({
    
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;