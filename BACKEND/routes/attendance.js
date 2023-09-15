const router = require("express").Router();
const { response } = require("express");
let Attendance = require("../models/attendance");

//Add attendance
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const role = req.body.role;
    const empNo = req.body.empNo;
    const contactNo = req.body.contactNo;
    const join = req.body.join;
    const workHours = req.body.workHours;
    const otHours = req.body.otHours;
    const shift = req.body.shift;

    const newAttendance = new Attendance({

        name,
        role,
        empNo,
        contactNo,
        join,
        workHours,
        otHours,
        shift

    })

    newAttendance.save().then(()=>{
        res.json("New Attendance Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View Attendance
router.route("/").get((req,res)=>{

    Attendance.find().then((attendance)=>{
        res.json(attendance)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {name, role, empNo, contactNo, join, workHours, otHours, shift} = req.body;

    const updateAttendance = {
        name,
        role,
        empNo,
        contactNo,
        join,
        workHours,
        otHours,
        shift
    }

    const update = await Attendance.findByIdAndUpdate(userId, updateAttendance)
    .then(()=>{
        res.status(200).send({status: "Attendance Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete Attendance by ID
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Attendance.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Attendance deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete attendance",error:err.message})
    })
})

//View Attendance by ID
router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Attendance.findById(userId)
    .then((attendance)=>{
        res.status(200).send({status: "user fetched", attendance})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get attendance",error:err.message})
    })
})

//Search 

router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Attendance.find({
        $or: [
          { name: { $regex: searchInput, $options: 'i' } },
          { role: { $regex: searchInput, $options: 'i' } },
          { empNo: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;