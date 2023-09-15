import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddClientOrder(){

    const navigate = useNavigate();
    const [fuelType, setFuelType] = useState("");
    const [amount, setAmount] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [price, setPrice] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newOrder = {
            fuelType,
            amount,
            orderDate,
            deliveryDate,
            price
        }

        axios.post("http://localhost:8070/orderss/add",newOrder).then(()=>{
            
            alert("Order Created");
            navigate('/ManageOrders');

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
                <body><div>
                <section id="sidebar">
                        <br/><img className='brandLogo' src={require('./img/cpetcoLogo.png')} alt='logo'/><br/><br/>
                        <span className="brand">J.J. Dias Enterprises</span>
                        <ul className="side-menu top">
                            <li>
                                <a href={"/ClientDashboard"}>
                                    <i className='bx bxs-dashboard' ></i>
                                    <span className="text">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/ManageClients">
                                    <i className='bx bx-user'></i>
                                    <span className="text">Client Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="/ManageOrders">
                                <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                    <span className="text">Client Order Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Ordersreport">
                                <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                    <span className="text">Generate Report</span>
                                </a>
                            </li>
                            
                            <li>
                                <a href="/ClientBackup">
                                <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                    <span className="text">Backup & Restore</span>
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
                                    <h1>Client Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Client Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#" className='active'>Add Order</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add Order</h3>
                                    </div>
                                    
                                    <form onSubmit={sendData} >
                                        
                                        {/* <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="fuelType"  className="col-sm-2 col-form-label">Fuel Type</label>
                                            <input type="text" className="form-control form-control-user"  id="fuelType" placeholder="Enter fuelType"
                                            onChange={(e)=>{
                                                setFuelType(e.target.value);
                                            }}/>
                                        </div> */}

                                <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Fuel_Type</label>
                                            <select id="inputState" className="form-control form-control-user" 
                                            onChange={(e)=>{
                                                setFuelType(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                <option >Petrol(92 Octane)</option>
                                                <option >Petrol(95 Octane)</option>
                                                <option > Diesel(Auto Diesel)</option>
                                                <option >Diesel(Lanka Super Diesel 4 star)</option>
                                                <option > Furnace Oil</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
                                            <input type="text" id="amount" className="form-control form-control-user" placeholder="Enter Amount"
                                            onChange={(e)=>{
                                                setAmount(e.target.value);
                                            }}/>
                                        </div>

                                        {/* <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="orderDate" className="col-sm-2 col-form-label">Order date</label>
                                            <input type="text"  className="form-control form-control-user" id="orderDate" placeholder="Enter orderdate"
                                            onChange={(e)=>{
                                                setOrderDate(e.target.value);
                                            }}/>
                                        </div> */}

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="date" className="col-sm-2 col-form-label">Order_Date</label>
                                            <input type="date"className="form-control form-control-user" id="orderDate" placeholder="Enter Date" onChange={(e) =>{
                                             setOrderDate(e.target.value);}}/>
                                        </div>

                                        {/* <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="deliveryDate" className="col-sm-2 col-form-label">Delivery date</label>
                                            <input type="text"  className="form-control form-control-user" id="deliveryDate" placeholder="Enter deliverydate"
                                            onChange={(e)=>{
                                                setDeliveryDate(e.target.value);
                                            }}/>
                                        </div> */}

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="date" className="col-sm-2 col-form-label">Delivery_Date</label>
                                            <input type="date"className="form-control form-control-user" id="deliveryDate" placeholder="Enter Date" onChange={(e) =>{
                                             setDeliveryDate(e.target.value);}}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                            <input type="text" className="form-control form-control-user" id="price" placeholder="price"
                                            onChange={(e)=>{
                                                setPrice(e.target.value);
                                            }}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Place Order</button>
                                                <Link to={'/ManageOrders'}><button type="reset" className="btn btn-danger btn-sm">Cancel Order</button></Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </section>
                </body>
    )
}