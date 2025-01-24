const db = require('../config/dbConnect');


//queries for users table
exports.doesUserExist = async (email) => {
    try {
       const [ result ] = await db.query(`
        SELECT * 
        FROM users
        WHERE email = ?
        `,[email])
        return result;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

exports.registerUser = async (fullname, mobile_number, email, pass) => {
    try {
        const [ result ] = await db.query(`
         INSERT INTO users (fullname,mobile_number,email,pass)  
         VALUES (?,?,?,?) 
        `,[fullname,mobile_number,email,pass]);
        return result.insertId;
    } catch (error) {
        throw new Error("Error creating user");
    }
};

exports.loginUser= async (email) => {
    try {
        const [ result ] = await db.query(`
        SELECT * 
        FROM users
        WHERE email = ?
        `,[email])
        return result;
    } catch (error) {
        throw new Error("Error Logging In");
    }
};

exports.editUser = async (fullname,mobile_number) => {
    try {
        const [ result ] = db.query(`
        UPDATE users
        SET fullname = ?, mobile_number = ?
        `,[fullname,mobile_number]);
        return result.affectedRows > 0;
    } catch (error) {
        
    }
}

exports.deleteUser = async (userId) => {
    try {
        const [result] = await db.query(`
            DELETE FROM users
            WHERE id = ?
        `, [userId]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error(`Error deleting User`);
    }
};

//queries for campaign table
exports.getCampigns = async (id) => {
    try {
        const [ result ] = await db.query(`
        SELECT * FROM campaign
        WHERE addedBy = ?
        `,[id]);
        return result;
    } catch (error) {
        throw new Error("Error getting campaigns");
    }
}

exports.getCampaign = async (campaignId,userId) => {
    try {
        const [ result ] = await db.query(`
        SELECT * FROM campaign
        WHERE id = ? AND addedBy = ?
        `,[campaignId,userId])
        if(result.length === 0) return false;
        else{
            const [ actions ] = await db.query(`
            SELECT * FROM actions
            WHERE campaign_id = ?
            `,[campaignId]);
            return {campaign : result[0], actions};
        }
    } catch (error) {
        throw new Error("Error getting campaign");
    }
}

exports.addBillboard = async (userId,billboard_image,segmented_image,title,description) => {
    try {
        const [ result ] = await db.query(`
        INSERT INTO campaign (addedBy,billboard_image,segmented_image,title,description)
        VALUES (?,?,?,?,?)
        `,[userId,billboard_image,segmented_image,title,description]);
        return result.insertId;
    } catch (error) {
        throw new Error("Error Adding Billboard");
    }
};


exports.addBanner = async (campaignId,banner_image,final_image) => {
    try {
        const [ result ] = await db.query(`
        UPDATE campaign
        SET banner_image=?,final_image=? 
        WHERE id=?
        `,[banner_image,final_image,campaignId]);
        return result;
    } catch (error) {
        throw new Error("Error processing banner");
    }
};

exports.deleteCampaign = async (campaignId,userId) => {
    try {
        const [result] = await db.query(`
            DELETE FROM campaign
            WHERE id = ? AND addedBy = ?
        `, [campaignId,userId]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error deleting campaign');
    }
};

//queries for action table
exports.addAction = async (billboard_id,x,y,action_type,action_data) => {
    try {
        const [ result ] = await db.query(`
        INSERT INTO actions (campaign_id,x_coordinate,y_coordinate,action_type,action_data)
        VALUES (?,?,?,?,?)
        `,[billboard_id,x,y,action_type,action_data]);
        return result.insertId;
    } catch (error) {
        throw new Error("Error adding action");
    }
}