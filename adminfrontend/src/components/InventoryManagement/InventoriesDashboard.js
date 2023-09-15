import React,{useState, useEffect} from "react";
import axios from "axios";

function InventoryDashboard(){


    const [users, setUsers] = useState([]);
    const [sellfuel, setsellfuel] = useState([]);

    //Fetch data
    useEffect(()=>{
        function getUsers (){
            axios.get("http://localhost:8070/inventory/")
            .then((res)=>{
                setUsers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getUsers();
    },[])

    //Fetch data
    useEffect(()=>{
        function getsellfuel (){
            axios.get("http://localhost:8070/inventory/")
            .then((res)=>{
                setsellfuel(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getsellfuel();
    },[])

    const length = users.length;
    const number = sellfuel.length;

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
                                    <p>Oil Mart Records</p>
                                </span>
                            </li>

                            <li>
                            <i className='bx bxs-user' undefined ></i>
                                <span className="text">
                                    <h3>{ number }</h3>
                                    <p>Backup</p>
                                </span>
                            </li>

                            {/* <li>
                                <i className='bx bxs-group' ></i>
                                <span className="text">
                                    <h3>0</h3>
                                    <p>Total Visitors</p>
                                </span>
                            </li>
                            <li>
                                <i className='bx bxs-cloud-upload'></i>
                                <span className="text">
                                    <h3>0</h3>
                                    <p>Total Backups</p>
                                </span>
                            </li> */}
                        </ul>
                    </main>
                </section>
            </body>
    )
}

export default InventoryDashboard