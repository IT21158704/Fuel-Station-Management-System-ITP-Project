const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

const adminRouter = require("./routes/admins.js");
app.use("/admin",adminRouter);

const reservoirRouter = require("./routes/reservoirs.js");
app.use("/reservoirs",reservoirRouter);

const  employeeRouter = require("./routes/employees.js");
app.use("/employee",employeeRouter);

const supplierRouter = require("./routes/suppliers.js");
app.use("/supplier",supplierRouter);

const orderRouter = require("./routes/orders.js");
app.use("/order",orderRouter);

const financialRouter = require("./routes/adminss.js");
app.use("/adminss",financialRouter);

const inventoryRouter = require("./routes/inventories.js");
app.use("/inventory",inventoryRouter);

const attendanceRouter = require("./routes/attendance.js");
app.use("/attendance",attendanceRouter);

const shiftRouter = require("./routes/shift.js");
app.use("/shift",shiftRouter);

const clientRouter = require("./routes/client.js");
app.use("/client",clientRouter);

const ordersRouter = require("./routes/orderss.js");
app.use("/orderss",ordersRouter);


app.listen(PORT, () =>{
    console.log(`Server is up and running on port number : ${PORT}`);
})

