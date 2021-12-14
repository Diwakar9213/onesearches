const mongoose = require('mongoose')

//  Add Colors

const colors = new mongoose.Schema({
    colorscode : {
        type: String,
        required: true
    }
},{timestamps: true})

const colorsgallery = mongoose.model('colorstore', colors)
module.exports = colorsgallery;