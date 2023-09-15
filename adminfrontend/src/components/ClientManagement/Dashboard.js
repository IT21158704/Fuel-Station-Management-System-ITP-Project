import React,{useState, useEffect} from "react";
import axios from "axios";

function ClientDashboard(){


    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    //Fetch data
    useEffect(()=>{
        function getUsers (){
            axios.get("http://localhost:8070/client/")
            .then((res)=>{
                setUsers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getUsers();
    },[])

    useEffect(()=>{
        function getOrders (){
            axios.get("http://localhost:8070/orderss/")
            .then((res)=>{
                setOrders(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getOrders();
    },[])

    const length = users.length;
    const number = orders.length;

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
                                <h1>Dashboard</h1>
                                <ul className="breadcrumb">
                                    <li>
                                        <a href="#" className='active'>Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="box-info">
                            <li>
                            <i className='bx bxs-user' undefined ></i>
                                <span className="text">
                                    <h3>{ length }</h3>
                                    <p>Total Client</p>
                                </span>
                            </li>
                            <li>
                            <i className='bx bxs-user' undefined ></i>
                                <span className="text">
                                    <h3>{ number }</h3>
                                    <p>Total Orders</p>
                                </span>
                            </li>
                            
                        </ul>
                    </main>
                </section>
            </body>
    )
}

export default ClientDashboard