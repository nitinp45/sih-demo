const mongoose = require('mongoose');

//const db = "mongodb://localhost:27017/test";
const db = "mongodb+srv://nitinspatil2003:iEdcW5ZAa08usddf@cluster0.pzote40.mongodb.net/"

mongoose.connect(db).then((res)=>{
    console.log("Mongoose is connected");
}).catch((err)=>{
    console.log(`server error ${err}`);
})