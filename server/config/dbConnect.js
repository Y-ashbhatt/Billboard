const mongoose = require('mongoose')

//function to connect to Database - MongoDB
const dbConnect = async () => {
    try{
        //connecting to Database
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected Successfully!");
    }
    catch(error){
        console.log(`error : ${error.message}`); 
    }
}

module.exports = dbConnect