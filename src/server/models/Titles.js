const mongoose = require("mongoose");

module.exports = mongoose.model("Title", new mongoose.Schema(), "Titles");
