const billboardModel = require('../models/Billboard');
const userModel = require('../models/User');
const mongoose = require('mongoose');
const { addBillboard, addBanner } = require('./dbController');

exports.getProcessedBillboards = async (req,res,next) => {
    try {
        const email = req.user.email;
        const userInfo = await userModel.findOne({email}).populate('Billboard').select('-password');
        const processedImageData = userInfo.Billboard.filter((item)=>{
            if(item.processedImage.imageUrl === "") return false;
            else return true;
        });
        if(userInfo.length === 0) return res.status(404).json({msg : "No Processed Images"});
        res.status(200).json({userInfo : {processedImageData, credits : userInfo.credits}});
    } catch (error){
        next(error);
    }
}

exports.processBillboard = async (req,res,next) => {
    try {
        const { email,id } = req.user;

        const { billboardImage,title,description } = req.body;
        if(!billboardImage) return res.status(400).json({msg : "Image is required"});

        //code for flask API call here

        const response = await fetch("https://0342-34-91-57-90.ngrok-free.app/generate-billboard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({ billboardUrl : billboardImage })
        });
        const imageData = await response.json();
        const segmentedImage = imageData.segmentedBillboardUrl;

        //api call code ends here

        const campaignId = await addBillboard(id,billboardImage,segmentedImage,title,description);
        if(!campaignId) return res.status(400).json({msg : "Error creating campaign"}); 
        return res.status(201).json({id : campaignId, billboardImage, segmentedImage});
    }
    catch (error){
        next(error)
    }
}

exports.processBanner = async (req,res,next) => {
    try {
        const { email,id } = req.user;
        const { campaignId, bannerImage, billboardImage } = req.body;
        if(!bannerImage) return res.status(400).json({msg : "Image is required"});

        const response = await fetch("https://0342-34-91-57-90.ngrok-free.app/generate-banner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({ billboardUrl : billboardImage, bannerUrl : bannerImage })
        });
        const imageData =  await response.json();
        const processedImage = imageData.finalBillboardUrl;
        const result = await addBanner(campaignId,bannerImage,processedImage);
        if(result.affectedRows === 0) return res.status(400).json({msg : "No record with given id found"});
        res.status(201).json({processedImage});
    }
    catch (error){
        next(error)
    }
}

exports.saveFinalBillboardData = async (req,res,next) => {
    try {
       const { billboardId, title, description, tags, link, type } = req.body;

       if (!billboardId || !mongoose.Types.ObjectId.isValid(billboardId)) {
        return res.status(400).json({ msg: "Invalid or missing billboardId" });
    }
       const billboardData = await billboardModel.findByIdAndUpdate(billboardId,{$set : {
            'processedImage.title': title,
            'processedImage.description': description,
            'processedImage.tags': tags,
            'processedImage.link': link,
            'processedImage.type': type,
       }
       }, {returnDocument : 'after'});
       return res.status(200).json({msg : "Saved"}); 
    } catch (error) {
        next(error);
    }
}

exports.deleteBillboard = async (req,res,next) => {
    try {
        const { email } = req.user;
        const id = req.params.id;
        const flag = false;
        
        if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ msg: "Invalid or missing id" });

        let user = await userModel.findOne({email});
        user.Billboard.map((item)=>{
            if(item == id) {
                flag = true;
            }
        })
        
        if(flag === true){
            const deletedBillboard = await billboardModel.deleteOne({_id : id});
            return res.status(200).json({msg : "Billboard Deleted Successfully"});
        }
        else{
            return res.status(400).json({msg : "You are not authorized to delete this resource"})
        }
    } catch (error) {
        next(error)
    }
}