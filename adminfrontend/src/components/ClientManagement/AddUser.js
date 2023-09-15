import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddClient(){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [NIC, setUserName] = useState("");
    const [contactNum, setPassword] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newUser = {
            name,
            address,
            email,
            NIC,
            contactNum
        }

        axios.post("http://localhost:8070/client/add",newUser).then(()=>{
            alert("User Created");
            setName("");
            setRole("");
            setEmail("");
            setUserName("");
            setPassword("");

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
                                            <a href="#" className='active'>Add Client</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add Client</h3>
                                    </div>
                                    
                                    <form onSubmit={sendData} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Name</label>
                                            <input type="text" className="form-control form-control-user"  id="name" placeholder="Enter Name"
                                            onChange={(e)=>{
                                                setName(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Address</label>
                                            <input type="text" id="inputState" className="form-control form-control-user" placeholder="Enter Address"
                                            onChange={(e)=>{
                                                setRole(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                            <input type="text"  className="form-control form-control-user" id="email" placeholder="Enter email"
                                            onChange={(e)=>{
                                                setEmail(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">NIC</label>
                                            <input type="text"  className="form-control form-control-user" id="userName" placeholder="Enter NIC"
                                            onChange={(e)=>{
                                                setUserName(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Contact</label>
                                            <input type="text" className="form-control form-control-user" id="password" placeholder="Contact"
                                            onChange={(e)=>{
                                                setPassword(e.target.value);
                                            }}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Add Client</button>
                                                <Link to={'/ManageUseres'}><button type="button" className="btn btn-danger btn-sm">Cancel</button></Link>
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