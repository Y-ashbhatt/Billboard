const billboardModel = require('../models/Billboard');
const userModel = require('../models/User')

exports.getProcessedBillboards = async (req,res,next) => {
    try {
        const email = req.user.email;
        const userInfo = await userModel.findOne({email}).populate('Billboard').select('-password');
        console.log(userInfo)
        const processedImageData = userInfo.Billboard.filter((item)=>{
            if(item.processedImage.imageUrl === "") return false;
            else return true;
        });
        if(userInfo.length === 0) return res.status(404).json({msg : "No Processed Images"});
        res.status(200).json({userInfo : {processedImageData, credits : userInfo.credits}});
    } catch (error) {
        next(error);
    }
}

exports.processBillboard = async (req,res,next) => {
    try {
        const { billboardImage } = req.body;
        if(!billboardImage) return res.status(400).json({msg : "Image is required"});
        //code for flask API call here
        const response = await fetch("https://7533-35-230-48-158.ngrok-free.app/generate-billboard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({ billboardUrl : billboardImage })
        });
        const imageData = await response.json();
        const segmentedImage = imageData.segmentedBillboardUrl;

        const billboardData = await billboardModel.create({billboardImage,segmentedImage});
        let user = await userModel.findOne({email : req.user.email});
        user.billboard.append(billboardData._id);
        await user.save();

        return res.status(201).json({billboardData});
    }
    catch (error){
        next(error)
    }
}

exports.processBanner = async (req,res,next) => {
    try {
        const { email } = req.user;
        const { billboardId, bannerImage, billboardImage } = req.body;
        if(!bannerImage) return res.status(400).json({msg : "Image is required"});

        const response = await fetch("https://7533-35-230-48-158.ngrok-free.app/generate-banner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({ billboardUrl : billboardImage, bannerUrl : bannerImage })
        });
        const imageData =  await response.json();
        const processedImage = imageData.finalBillboardUrl;
        const billboardData = await billboardModel.findOneAndUpdate({_id : billboardId},{$set : {bannerImage,processedImage : {imageUrl : processedImage}}},{returnDocument : 'after'});
        // const user = await userModel.findOneAndUpdate({email},{$set : {credits : 34}});
        return res.status(201).json({billboardData});
    }
    catch (error){
        next(error)
    }
}

exports.saveFinalBillboardData = async (req,res,next) => {
    try {
       const { billboardId, title, description, tags, link, type } = req.body;
       const billboardData = await billboardModel.findOneAndUpdate({_id : billboardId},{$set : {processedImage : { title,description,tags,link,type }}}, {returnDocument : 'after'});
       return res.status(200).json({msg : "Saved"}); 
    } catch (error) {
        next(error);
    }
}