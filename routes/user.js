const express = require('express')
const router = express.Router();
require('../config/database');
const User = require('../model/user');
const { model } = require('mongoose');

// Example middleware
// router.use((req, res, next) => {
//   console.log('This is a middleware');
//   next(); // Don't forget to call next() to pass control to the next middleware/route handler
// });

// Example route
router.get('/', (req, res) => {
  res.send('This is the user route');
});

router.post('/add', async(req, res) => {
    const{id,sname,semail,sphone,stype,password}=req.body;

    if(!id || !sname || !semail || !sphone || !stype || !password){
        return res.status(400).send("Please fill all the fields");
    }
    try{
        const userExist = await User.findOne({semail:semail});
        if(userExist){
            return res.status(400).send("User already exists");
        }else{
            const user  = new User({id,sname,semail,sphone,stype,password});
            await user.save();
            res.status(200).send("User Created Successfully");
        }
    }catch(err){
        return res.status(500).send("Server error");
    }

});

module.exports = router;
