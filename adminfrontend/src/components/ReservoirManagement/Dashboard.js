import React,{useState, useEffect} from "react";
import axios from "axios";

function ReservoirDashboard(){


    const [users, setUsers] = useState([]);

    //Fetch data
    useEffect(()=>{
        function getUsers (){
            axios.get("http://localhost:8070/reservoirs/")
            .then((res)=>{
                setUsers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getUsers();
    },[])

    const length = users.length;

    return(

        <body>
            <div>
                    <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./img/cpetcoLogo.png')} alt='logo'/><br/><br/>
                    <span className="brand">J.J. Dias Enterprises</span>
                    <ul className="side-menu top">
                        <li>
                            <a href={"/ReservoirDashboard"}>
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/AddReservoir">
                                <i className='bx bx-user'></i>
                                <span className="text">Add Reading</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ReadingList">
                                <i className='bx bxs-analyse'></i>
                                <span className="text">Reading List</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ReadingListReport">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Generate Report</span>
                            </a>
                        </li>
                        <li>
                          <a href="/ReadingBackup">
                          <i className='bx bx-cloud bx-flip-horizontal' ></i>
                              <span className="text">Backup & Restore</span>
                          </a>
                            </li>
                        <li>
                            <a className="logout" href="/login">
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
                                    <p>Total Reading</p>
                                </span>
                            </li>
                            <li>
                                <i className='bx bxs-group' ></i>
                                <span className="text">
                                    <h3>0</h3>
                                    <p>Total Selling Price</p>
                                </span>
                            </li>
                            <li>
                                <i className='bx bxs-cloud-upload'></i>
                                <span className="text">
                                    <h3>0</h3>
                                    <p>Total Backups</p>
                                </span>
                            </li>
                        </ul>
                    </main>
                </section>
            </body>
    )
}

export default ReservoirDashboard;