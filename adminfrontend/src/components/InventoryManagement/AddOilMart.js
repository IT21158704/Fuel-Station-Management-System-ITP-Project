import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddOilMart(){

    const navigate = useNavigate();
    const [EngineModel, setName] = useState("");
    const [Brand, setEmail] = useState("");
    const [Grade, setUserName] = useState("");
    const [CustomerContactNumber, setPassword] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newUser = {
            EngineModel,
            Brand,
            Grade,
            CustomerContactNumber
        }

        axios.post("http://localhost:8070/inventory/add",newUser).then(()=>{
            
            alert("Added");
            navigate('/InventoryManageUseres');

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
                <body>
                    <div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./img/cpetcoLogo.png')} alt='logo'/><br/><br/>
                    <span className="brand">J.J. Dias Enterprises</span>
                    <ul className="side-menu top">
                        <li>
                            <a href={"/InventoryDashboard"}>
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/InventoryManageUseres">
                                <i className='bx bx-user'></i>
                                <span className="text">Check Oil Mart</span>
                            </a>
                        </li>
                        <li>
                            <a href="/InventoryBackup">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Backup & Restore</span>
                            </a>
                        </li>

                        <li>
                            <a href="/InventoriReport">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Generate Report</span>
                            </a>
                        </li>

                        <li>
                            <a className="/login">
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
                                    <h1>Add Oil Mart</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Oil Mart</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#" className='active'>Add Oil Mart</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add Oil Mart</h3>
                                    </div>
                                    
                                    <form onSubmit={sendData} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Oil Type</label>
                                            <input type="text" className="form-control form-control-user"  id="name" placeholder="Enter oil type"
                                            onChange={(e)=>{
                                                setName(e.target.value);
                                            }}/>
                                        </div>

                                        

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Brand</label>
                                            <input type="text"  className="form-control form-control-user" id="email" placeholder="Enter Brand"
                                            onChange={(e)=>{
                                                setEmail(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">Grade</label>
                                            <input type="text"  className="form-control form-control-user" id="userName" placeholder="Enter Grade"
                                            onChange={(e)=>{
                                                setUserName(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Customer_Contact_Number</label>
                                            <input type="text" className="form-control form-control-user" id="password" placeholder="Customer Contact Number"
                                            onChange={(e)=>{
                                                setPassword(e.target.value);
                                            }}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ManageUseres'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
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