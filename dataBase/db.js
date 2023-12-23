const mongoose = require("mongoose");
// mongoDB Password = Project123
const URL = "mongodb+srv://admin:Project123@atlascluster.0axrzqt.mongodb.net/";
const dbConnection = async ()=>{
    try{
        await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true})
        console.log("DataBase Connected Successful")

    }catch(error){
        console.log( "Error occur in database " + error)
    }
}
module.exports = dbConnection;