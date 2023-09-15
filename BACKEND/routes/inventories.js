const router = require("express").Router();
const { response } = require("express");
let Inventory = require("../models/inventory");

//Create User
router.route("/add").post((req,res)=>{

    const EngineModel = req.body.EngineModel;
    const Brand = req.body.Brand;
    const Grade = req.body.Grade;
    const CustomerContactNumber = req.body.CustomerContactNumber;

    const newInventory = new Inventory({

        EngineModel,
        Brand,
        Grade,
        CustomerContactNumber

    })

    newInventory.save().then(()=>{
        res.json("New User Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View Users
router.route("/").get((req,res)=>{

    Inventory.find().then((inventoris)=>{
        res.json(inventoris)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {
        EngineModel,
        Brand,
        Grade,
        CustomerContactNumber} = req.body;

    const updateInventory = {
        EngineModel,
        Brand,
        Grade,
        CustomerContactNumber
    }

    const update = await Inventory.findByIdAndUpdate(userId, updateInventory)
    .then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete User by ID
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Inventory.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message})
    })
})

//View user by ID
router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Inventory.findById(userId)
    .then((admin)=>{
        res.status(200).send({status: "user fetched", admin})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})

//Search

router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Inventory.find({
        $or: [
          { Brand: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;