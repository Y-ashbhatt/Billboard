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
}

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
}

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
}

//queries for campaign table
exports.addBillboard = async (userId,billboard_image,segmented_image,title,description) => {
    try {
        const [ result ] = await db.query(`
        INSERT INTO campaign (addedBy,billboard_image,segmented_image,title,description)
        VALUES (?,?,?,?)
        `,[userId,billboard_image,segmented_image,title,description])
        return result.insertId;
    } catch (error) {
        throw new Error("Error processing billboard");
    }
}


exports.addBanner = async (campaignId,banner_image,final_image) => {
    try {
        const [ result ] = await db.query(`
        UPDATE campaign
        SET banner_image=?,final_image=? 
        WHERE id=?
        `,[banner_image,final_image,campaignId])
        return result;
    } catch (error) {
        throw new Error("Error processing banner");
    }
}