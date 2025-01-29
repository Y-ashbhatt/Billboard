const { addBillboard, addBanner, getCampigns, addAction, deleteCampaign, getCampaign, deleteAction } = require('./dbController');
const { verifyActionData } = require('../utilities/verifyActionData');

exports.getCampaigns = async (req, res, next) => {
    try {
        const { id } = req.user;
        const campaigns = await getCampigns(id);
        const nonEmptyCampaigns = campaigns.filter((item) => (item.final_image !== null))
        return res.status(200).json({ campaigns: nonEmptyCampaigns });
    } catch (error) {
        next(error);
    }
}

exports.getCampaign = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { campaignId } = req.body;
        if (!campaignId) return res.status(400).json({ msg: "campaign is required" });

        const result = await getCampaign(campaignId, id);
        if (!result) return res.status(400).json({ msg: "You are not authorized to view this resource" });
        res.status(200).json({ campaign: result.campaign, actions: result.actions });
    } catch (error) {
        next(error);
    }
}

exports.processBillboard = async (req, res, next) => {
    try {
        const { email, id } = req.user;

        const { billboardImage, title, description } = req.body;
        if (!billboardImage) return res.status(400).json({ msg: "Image is required" });

        //code for flask API call here

        const response = await fetch(`${process.env.FLASK_BACKEND_BASE_URL}/generate-billboard`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ billboardUrl: billboardImage })
        });
        if (response.ok) {
            const imageData = await response.json();
            const segmentedImage = imageData.segmentedBillboardUrl;

            const campaignId = await addBillboard(id, billboardImage, segmentedImage, title, description);
            if (!campaignId) return res.status(400).json({ msg: "Error creating campaign" });
            return res.status(201).json({ id: campaignId, billboardImage, segmentedImage });
        }
        else {
            return res.status(500).json({ msg: response });
        }
    }
    catch (error) {
        next(error)
    }
}

exports.processBanner = async (req, res, next) => {
    try {
        const { campaignId, bannerImage, billboardImage } = req.body;
        if (!bannerImage || !campaignId) return res.status(400).json({ msg: "Image and Campaign id is required" });

        const response = await fetch(`${process.env.FLASK_BACKEND_BASE_URL}/generate-banner`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ billboardUrl: billboardImage, bannerUrl: bannerImage })
        });
        const imageData = await response.json();
        const processedImage = imageData.finalBillboardUrl;
        const result = await addBanner(campaignId, bannerImage, processedImage);
        if (result.affectedRows === 0) return res.status(400).json({ msg: "No record with given id found" });
        res.status(201).json({ processedImage });
    }
    catch (error) {
        next(error)
    }
}

exports.deleteBillboard = async (req, res, next) => {
    try {
        const { id } = req.user;
        const billboardId = req.params.id;

        const deletedBillboard = await deleteCampaign(billboardId, id);
        if (deletedBillboard) return res.status(200).json({ msg: "Billboard Deleted Successfully" });
        res.status(400).json({ msg: "You are not authorized to delete this resource" })
    } catch (error) {
        next(error)
    }
}

exports.addAction = async (req, res, next) => {
    try {
        const { billboardId, x, y, action_type, action_data } = req.body;
        if (!billboardId || !x || !y || !action_type || !action_data) return res.status({ msg: "Information not complete" });

        const data = verifyActionData(action_type, action_data);
        if (data.length === 0) return res.status(400).json({ msg: "Action data is invalid" })
        const jsonData = JSON.stringify(data);

        const action = await addAction(billboardId, x, y, action_type, jsonData);
        if (action > 0) return res.status(201).json({ msg: "Action created successfully", actionId: action });
        res.status(400).json({ msg: "Error adding action" });
    } catch (error) {
        next(error);
    }
}

exports.deleteAction = async (req, res, next) => {
    try {
        const { id } = req.user;
        const billboardId = req.params.billboardId
        const actionId = req.params.actionId;

        const deletedAction = await deleteAction(id, billboardId, actionId);
        if (deletedAction) return res.status(200).json({ msg: "Action Deleted Successfully" });
        res.status(400).json({ msg: "Action not found or You are not authorized to delete this action" })
    } catch (error) {
        next(error)
    }
}