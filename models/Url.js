const mongoose = require("mongoose");
const {nanoid} = require("nanoid");
const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        unique: [true, "Url already exists"],
        require: true,
    },
    shortUrl: {
        type: String,
        require: true,
        unique: true,
        default: () => nanoid(7)
    },
    count: {
        type: Number,
        require: true,
        default: 0
    }
});

module.exports = mongoose.model("Url", urlSchema);