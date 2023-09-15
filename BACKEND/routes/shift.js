const router = require("express").Router();
const { response } = require("express");
let Shift= require("../models/shift");

//Add shift
router.route("/add").post((req,res)=>{

    const shift = req.body.shift;
    const clockIn = req.body.clockIn;
    const clockOut = req.body.clockOut;

    const newShift = new Shift({

        shift,
        clockIn,
        clockOut

    })

    newShift.save().then(()=>{
        res.json("New User Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View Shift
router.route("/").get((req,res)=>{

    Shift.find().then((shift)=>{
        res.json(shift)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {shift, clockIn, clockOut} = req.body;

    const updateShift = {
        shift,
        clockIn,
        clockOut
    }

    const update = await Shift.findByIdAndUpdate(userId, updateShift)
    .then(()=>{
        res.status(200).send({status: "Shift Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete Shift by ID
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Shift.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Shift deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete shift",error:err.message})
    })
})

//View Shift by ID
router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Shift.findById(userId)
    .then((shift)=>{
        res.status(200).send({status: "shift fetched", shift})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})

//Search 

router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Shift.find({
        $or: [
          { shiftId: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;