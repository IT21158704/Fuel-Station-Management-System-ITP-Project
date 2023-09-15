import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PlaceOrder(){

    const [fueltype, setfueltype] = useState("");
    const [amount, setamount] = useState("");
    const [orderdate, setorderdate] = useState("");
    const [deliverydate, setdeliverydate] = useState("");
    const [price, setprice] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newOrder = {
            fueltype,
            amount,
            orderdate,
            deliverydate,
            price
        }
        

        axios.post("http://localhost:8070/order/add" , newOrder).then(()=>{
            alert("Order Placed");

            setfueltype("");
            setamount("");
            setorderdate("");
            setdeliverydate("");
            setprice("");
        
        }).catch((err)=>{
            alert(err)
        })
        
        }

    


     return (
        


    <body>

<div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./images/cpetcoLogo.png')} /><br/><br/>
                    <span class="brand">J.J. Dias Enterprises</span>
                    <ul className="side-menu top">
                        <li>
                            <a href="/getDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/getOrder">
                                <i class='bx bx-user'></i>
                                <span className="text">Order Management</span>
                            </a>
                        </li>
                        <li>
                        <a href="/getSup">
                                <i className='bx bxs-analyse'></i>
                                 <span className="text">Supplier Management</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Orderreport">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Generate Report</span>
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="logout">
                                <i className='bx bx-exit'></i>
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>

        </div>
    <section id="content">
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Order Management</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>
                        </li>
                        <li>
                            <a className="active" href="#">
                            Place Order
                            </a>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Place Order</h3>
                            <div class="col-auto">
                                <div class="input-group mb-2">
                                </div>
                            </div>
                    </div>

                    <form onSubmit={sendData}>
                   <div class="mb-3">    
            <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">FuelType:</label>
                                            <select id="inputState" className="form-control form-control-user" 
                                            onChange={(e)=>{
                                                setfueltype(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                <option >Petrol(92 Octane)</option>
                                                <option >Petrol(95 Octane)</option>
                                                <option > Diesel(Auto Diesel)</option>
                                                <option >Diesel(Lanka Super Diesel 4 star)</option>
                                                <option > Furnace Oil</option>
                                            </select>
                                        </div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="address" >Amount:</label>
            <input type="text" class="form-control" id="amount" placeholder="Enter Amount"
            onChange={(e)=>{

                setamount(e.target.value);
            }}/>
            </div>
            </div>

            <div class="mb-3">

           <div className="col-sm-6 mb-3 mb-sm-0">
                <label htmlFor="date" className="col-sm-2 col-form-label">OrderDate:</label>
                <input type="date"className="form-control form-control-user" id="date" placeholder="Enter Date" onChange={(e) =>{
                setorderdate(e.target.value);}}/>
            </div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <label htmlFor="date" className="col-sm-2 col-form-label">DeliveryDate:</label>
                <input type="date"className="form-control form-control-user" id="date" placeholder="Enter Date" onChange={(e) =>{
                setdeliverydate(e.target.value);}}/>
            </div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="price" >Price:</label>
            <input type="text" class="form-control" id="price" placeholder="Enter Price"
            onChange={(e)=>{

                setprice(e.target.value);
            }}/>
            </div>

            </div>
            <div className="submit">
            <button type="submit" className="btn btn-outline-success btn-sm">Place Order</button>
            <Link to={`/getOrder`}><button type="button" className="btn btn-outline-danger  btn-sm">Cancel</button></Link>
            </div>
        </form>
        </div>
            </div>
        </main>
    </section>
</body>
    )
}