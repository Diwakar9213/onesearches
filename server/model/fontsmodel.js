const mongoose = require('mongoose')

// Add Web Fonts

const fonts = new mongoose.Schema({
    fontname : {
        type: String,
        required: true
    },
    fontimage : {
        type: String,
    },
    fontfilezip : {
        type: String,
    }
},{timestamps: true})

const Fontsgallery = mongoose.model('fontstore', fonts)
module.exports = Fontsgallery;
