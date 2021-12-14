const mongoose = require('mongoose')

// Add Photoshop Brushes

const photoshopBrushes = new mongoose.Schema({
    brushname : {
        type: String,
        required: true
    },
    brushimage : {
        type: String,
    },
    brushfile : {
        type: String,
    }
},{timestamps: true})

const photoshopbrushgallery = mongoose.model('photoshopbrushstore', photoshopBrushes)
module.exports = photoshopbrushgallery;