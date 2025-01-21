const billboardModel = require('../models/Billboard');
const userModel = require('../models/User')

exports.getProcessedBillboards = async (req,res,next) => {
    try {
        const email = req.user.email;
        const userInfo = await userModel.findOne({email}).populate('Billboard').select('-password');
        if(userInfo.length === 0) return res.status(404).json({msg : "No Processed Images"});
        res.status(200).json({userInfo});
    } catch (error) {
        next(error);
    }
}

exports.processBillboard = async (req,res,next) => {
    try {
        const { billboardImage } = req.body;
        if(!billboardImage) return res.status(400).json({msg : "Image is required"});
        //code for flask API call here

        const segmentedImage = billboardImage;

        const billboardData = await billboardModel.create({billboardImage,segmentedImage});


        return res.status(201).json({billboardData});
    }
    catch (error){
        next(error)
    }
}

exports.processBanner = async (req,res,next) => {
    try {
        const { billboardId, bannerImage } = req.body;
        if(!bannerImage) return res.status(400).json({msg : "Image is required"});
        const processedImage = bannerImage;
        const billboardData = await billboardModel.findOneAndUpdate({_id : billboardId},{$set : {bannerImage,processedImage}},{returnDocument : 'after'});

        return res.status(201).json({billboardData});
    }
    catch (error){
        next(error)
    }
}