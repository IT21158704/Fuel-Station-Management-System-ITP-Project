const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({

    name : {
        type : String,
        // required : true
    },
    address : {
        type : String,
        // required : true
    },
    email : {
        type : String,
        // required : true
    },
    NIC : {
        type : String,
        // required : true
    },
    contactNum : {
        type : Number,
        // required : true
    }
})

const Admin = mongoose.model("Client",adminSchema);

module.exports = Admin;