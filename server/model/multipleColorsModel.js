const mongoose = require('mongoose')

//  Add Colors

const multipleColors = new mongoose.Schema({
    colorscode1 : {
        type: String,
    },
    colorscode2 : {
        type: String,
    },
    colorscode3 : {
        type: String,
    },
    colorscode4 : {
        type: String,
    },
    colorscode5 : {
        type: String,
    },
    colorscode6 : {
        type: String,
    }
},{timestamps: true})

const multiplecolorsgallery = mongoose.model('multiplecolorstore', multipleColors)
module.exports = multiplecolorsgallery;