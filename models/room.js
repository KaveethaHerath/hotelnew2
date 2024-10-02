const { default: mongoose } = require("mongoose")
const { trusted } = require("../db")

const roomSchema=mongoose.Schema({

    name: {
        type: String,
        required : true
    },
    num_person:{
        type: Number,
        required:true
    },
    rentperday:{
        type: Number,
        required:true
    },
    num_beds:{
        type: String,
        required:true
    },
    imageUrls:[],
    currentbookings:[],
    type:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    }


},
{
    timestamps: true,
}
)

const roomModel=mongoose.model('rooms', roomSchema)
module.exports=roomModel