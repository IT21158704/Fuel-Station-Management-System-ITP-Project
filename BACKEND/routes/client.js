const router = require("express").Router();
const { response } = require("express");
let Admin = require("../models/clients");

//Create User
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const NIC = req.body.NIC;
    const contactNum = req.body.contactNum;

    const newAdmin = new Admin({

        name,
        address,
        email,
        NIC,
        contactNum

    })

    newAdmin.save().then(()=>{
        res.json("New User Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View Users
router.route("/").get((req,res)=>{

    Admin.find().then((admins)=>{
        res.json(admins)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {
            name,
            address,
            email,
            NIC,
            contactNum} = req.body;

    const updateAdmin = {

        name,
        address,
        email,
        NIC,
        contactNum
    }

    const update = await Admin.findByIdAndUpdate(userId, updateAdmin)
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

    await Admin.findByIdAndDelete(userId)
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
    const user = await Admin.findById(userId)
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
      const users = await Admin.find({
        $or: [
          { NIC: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;