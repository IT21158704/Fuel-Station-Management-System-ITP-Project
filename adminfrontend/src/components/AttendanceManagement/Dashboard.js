import React,{useState, useEffect} from "react";
import axios from "axios";

function AttendanceDashboard(){


    const [attendance, setAttendance] = useState([]);
    const [shift, setShift] = useState([]);
    const [backup, setBackup] = useState([]);

    //Fetch data
    useEffect(()=>{
        function getAttendance (){
            axios.get("http://localhost:8070/attendance/")
            .then((res)=>{
                setAttendance(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getAttendance();
    },[])

    //Fetch data
    useEffect(()=>{
        function getShift (){
            axios.get("http://localhost:8070/shift/")
            .then((res)=>{
                setShift(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getShift();
    },[])


    const length = attendance.length;
    const number = shift.length;

    return(
            <body>
                <div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./img/cpetcoLogo.png')} alt='logo'/><br/><br/>
                    <span className="brand">J.J. Dias Enterprises</span>
                    <ul className="side-menu top">
                        <li>
                            <a href={"/AttendanceDashboard"}>
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ManageAttendance">
                                <i className='bx bx-user'></i>
                                <span className="text">Attendance Management</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ManageShift">
                                <i className='bx bxs-analyse'></i>
                                <span className="text">Shift Management</span>
                            </a>
                        </li>
                        <li>
                            <a href="/GenerateReport">
                                <i className='bx bxs-analyse'></i>
                                <span className="text">Generate Report</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ABackup">
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
                                    <p>Total Attendance</p>
                                </span>
                            </li>
                            <li>
                                <i className='bx bxs-group' ></i>
                                <span className="text">
                                    <h3>{ number }</h3>
                                    <p>Total Shift</p>
                                </span>
                            </li>
                        </ul>
                    </main>
                </section>
            </body>
    )
}

export default AttendanceDashboard