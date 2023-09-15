import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditShift(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [shift, setShift] = useState({
                shift: '',
                clockIn: '',
                clockOut: ''
            });

            //Fetch data
            useEffect(()=>{
                function getShift (){
                    axios.get("http://localhost:8070/shift/get/"+id)
                    .then((res)=>{
                        setShift(res.data.shift);
                    }).catch((err)=>{
                        alert(err.message);
                    })
                }
                getShift();
            },[id])

            const handleChange = (e) => {
                setShift({
                  ...shift,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(shift); // or save the data to your backend
                axios
                .put('http://localhost:8070/shift/update/' +id, shift)
                .then((response) => {
                    console.log(response.data);
                    alert("Shift Updated");
                    navigate('/ManageShift');
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
                                    <h1>Shift Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Shift Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit Shift</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Shift</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="shift"  className="col-sm-2 col-form-label">Shift</label>
                                            <input type="text" className="form-control form-control-user" name="shift" id="shift" value={shift.shift}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="clockIn"  className="col-sm-2 col-form-label">ClockIn</label>
                                            <input type="time" className="form-control form-control-user" name="clockIn" id="clockIn" value={shift.clockIn}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="clockOut"  className="col-sm-2 col-form-label">ClockOut</label>
                                            <input type="time" className="form-control form-control-user" name="clockOut" id="clockOut" value={shift.clockOut}
                                            onChange={handleChange}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ManageShift'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
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