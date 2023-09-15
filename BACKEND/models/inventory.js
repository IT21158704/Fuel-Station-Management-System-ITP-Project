const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    EngineModel : {
        type : String,
        // required: true
    },
    Brand: {
        type : String,
        // required:true
    },
    Grade: {
        type : String,
        // required: true
    },
    CustomerContactNumber: {
        type : String,
        // required: true
    }
})

const Inventory = mongoose.model("Inventory",inventorySchema);

module.exports = Inventory;