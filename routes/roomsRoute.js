//CONTAINS ALL THE API END POINTS OF ROOMS
//first API end-point which fetches all the rooms in our database

const express = require("express");

const router=express.Router();

const Room=require('../models/room')

router.get("/getallrooms",async(req,res)=>{
    try {
        const rooms=await Room.find({})
        res.send(rooms)
        //return res.json({rooms});
    } catch (error) {
        return res.status(400).json({message:error});
    }
  

});

module.exports=router;