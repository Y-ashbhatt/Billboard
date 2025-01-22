const mongoose = require('mongoose')

const billboardSchema = mongoose.Schema({
    billboardImage: {
        type: String,
        default: ""
    },
    segmentedImage: {
        type: String,
        default: ""
    },
    bannerImage: {
        type: String,
        default: ""
    },
    processedImage: {
        imageUrl: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: "",
        },
        tags: {
            type: String,
            default: ""
        },
        link: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
    }
});

module.exports = mongoose.model('Billboard', billboardSchema);