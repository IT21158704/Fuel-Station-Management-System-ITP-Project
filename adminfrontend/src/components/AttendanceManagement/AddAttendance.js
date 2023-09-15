import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddAttendance(){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [empNo,setempNo] = useState("")
    const [contactNo,setContactNo] = useState("")
    const [join,setJoin] = useState("")
    const [workHours,setWorkHours] = useState("")
    const [otHours,setOtHours] = useState("")
    const [shift,setShift] = useState("")

    function sendData(e){
        e.preventDefault();
        
        const newAttendance = {
            name,
            role,
            empNo,
            contactNo,
            join,
            workHours,
            otHours,
            shift
        }

        axios.post("http://localhost:8070/attendance/add",newAttendance).then(()=>{
            
            alert("Attendance Added");
            navigate('/ManageAttendance');

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
                                    <h1>Attendance Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Attendance Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#" className='active'>Add Attendance</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add Attendance</h3>
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
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Role</label>
                                            <select id="inputState" className="form-control form-control-user" 
                                            onChange={(e)=>{
                                                setRole(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                    <option>Administrator Manager</option>
                                                    <option>Supplier Manager</option>
                                                    <option>Financial Manager</option>
                                                    <option>Employee Manager</option>
                                                    <option>Client Manager</option>
                                                    <option>Reservoir Manager</option>
                                                    <option>Inventory Manager</option>
                                                    <option>Attendance Manager</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="empNo" className="col-sm-2 col-form-label">EmpNo</label>
                                            <input type="text"  className="form-control form-control-user" id="empNo" placeholder="Enter empNo"
                                            onChange={(e)=>{
                                                setempNo(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="contactNo" className="col-sm-2 col-form-label">contactNo</label>
                                            <input type="text"  className="form-control form-control-user" id="contactNo" placeholder="Enter contactNo"
                                            onChange={(e)=>{
                                                setContactNo(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="join" className="col-sm-2 col-form-label">Join</label>
                                            <input type="join" className="form-control form-control-user" id="join" placeholder="join"
                                            onChange={(e)=>{
                                                setJoin(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="workHours" className="col-sm-2 col-form-label">WorkHours</label>
                                            <input type="text" className="form-control form-control-user" id="workHours" placeholder="workHours"
                                            onChange={(e)=>{
                                                setWorkHours(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="otHours" className="col-sm-2 col-form-label">OtHours</label>
                                            <input type="text" className="form-control form-control-user" id="otHours" placeholder="otHours"
                                            onChange={(e)=>{
                                                setOtHours(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="shift" className="col-sm-2 col-form-label">Shift</label>
                                            <input type="shift" className="form-control form-control-user" id="shift" placeholder="shift"
                                            onChange={(e)=>{
                                                setShift(e.target.value);
                                            }}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ManageAttandance'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
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