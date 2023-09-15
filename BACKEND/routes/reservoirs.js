const router =  require("express").Router();
const { response } = require("express");
let Reservoir = require("../models/Reservoir");

//create User
router.route("/add").post((req,res)=>{

    const pump_number = req.body.pump_number;
    const fuel_type = req.body.fuel_type;
    const date = req.body.date;
    const employeeID = req.body.employeeID;
    const mReading = req.body.mReading;
    const litterPrice = req.body.litterPrice;
    const eReading = req.body.eReading;

    const newReservoir = new Reservoir({
        pump_number,
        fuel_type,
        date,
        employeeID,
        mReading,
        litterPrice,
        eReading

    })

    newReservoir.save().then(()=>{
        res.json("Reservoir Added")
    }).catch((err)=>{
        console.log(err)
    })


})

//veiw user
router.route("/").get((req,res)=>{
    Reservoir.find().then((reservoirs)=>{
        res.json(reservoirs)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const {pump_number,fuel_type,date,employeeID,mReading,litterPrice,eReading} = req.body;

    const updateReservoir = {
        pump_number,
        fuel_type,
        date,
        employeeID,
        mReading,
        litterPrice,
        eReading
    }

    const update = await Reservoir.findByIdAndUpdate(userId, updateReservoir)
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

    await Reservoir.findByIdAndDelete(userId)
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

    const user = await Reservoir.findById(userId)
    .then((reservoir)=>{
        res.status(200).send({status: "user fetched", reservoir})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})


//Search
router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Reservoir.find({
        $or: [
          { pump_number: { $regex: searchInput, $options: 'i' } },
          { fuel_type: { $regex: searchInput, $options: 'i' } },
          { date: { $regex: searchInput, $options: 'i' } },
          { employeeID: { $regex: searchInput, $options: 'i' } },
          { mReading: { $regex: searchInput, $options: 'i' } },
          {litterPrice: { $regex: searchInput, $options: 'i' } },
          { eReading: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


module.exports = router;