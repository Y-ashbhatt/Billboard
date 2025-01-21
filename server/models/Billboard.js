const mongoose = require('mongoose')

const billboardSchema = mongoose.Schema({
    billboardImage : {
        type : String,
        default : ""
    },
    segmentedImage : {
        type : String,
        default : ""
    },
    bannerImage : {
        type : String,
        default : ""
    },
    processedImage : {
        type : String,
        default : ""
    }
});

module.exports = mongoose.model('Billboard', billboardSchema);