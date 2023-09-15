import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditAttendance(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [attendance, setAttendance] = useState({
                name: '',
                role: '',
                empNo: '',
                contactNo: '',
                join: '',
                workHours: '',
                otHours: '',
                shift: ''
            });

            //Fetch data
            useEffect(()=>{
                function getAttendance (){
                    axios.get("http://localhost:8070/attendance/get/"+id)
                    .then((res)=>{
                        setAttendance(res.data.attendance);
                    }).catch((err)=>{
                        alert(err.message);
                    })
                }
                getAttendance();
            },[id])

            const handleChange = (e) => {
                setAttendance({
                  ...attendance,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(attendance); // or save the data to your backend
                axios
                .put('http://localhost:8070/attendance/update/' +id, attendance)
                .then((response) => {
                    console.log(response.data);
                    alert("Attendance Updated");
                    navigate('/ManageAttendance');
                })
                .catch((error) => {
                    console.log(error);
                });
              };
            

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
                                            <a className="active" href="#">Edit User</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Attendance</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Name</label>
                                            <input type="text" className="form-control form-control-user" name="name" id="name" value={attendance.name}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Role</label>
                                            <select id="inputState" className="form-control form-control-user"  name="role" value={attendance.role}
                                            onChange={handleChange}>
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
                                            <label htmlFor="empNo"  className="col-sm-2 col-form-label">EmpNo</label>
                                            <input type="text" className="form-control form-control-user" name="empNo" id="empNo" value={attendance.empNo}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="contactNo"  className="col-sm-2 col-form-label">contactNo</label>
                                            <input type="text" className="form-control form-control-user" name="contactNo" id="contactNo" value={attendance.contactNo}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="join"  className="col-sm-2 col-form-label">Join</label>
                                            <input type="text" className="form-control form-control-user" name="join" id="join" value={attendance.join}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="workHours"  className="col-sm-2 col-form-label">WorkHours</label>
                                            <input type="text" className="form-control form-control-user" name="workHours" id="workHours" value={attendance.workHours}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="otHours"  className="col-sm-2 col-form-label">OtHours</label>
                                            <input type="text" className="form-control form-control-user" name="otHours" id="otHours" value={attendance.otHours}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="shift"  className="col-sm-2 col-form-label">Shift</label>
                                            <input type="text" className="form-control form-control-user" name="shift" id="shift" value={attendance.shift}
                                            onChange={handleChange}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ManageAttendance'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
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