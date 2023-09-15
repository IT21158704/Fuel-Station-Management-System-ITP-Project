import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch data
  function getAttendance() {
    axios
      .get("http://localhost:8070/attendance/")
      .then((res) => {
        setAttendance(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getAttendance();
  }, []);

  // Delete data
  function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:8070/attendance/delete/" + i._id)
        .then(() => {
          getAttendance();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchAttendance() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/attendance/search/${searchInput}`)
        .then((res) => {
          setAttendance(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getAttendance();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchAttendance();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return (
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
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                    </li>
                                    <li>
                                        <a className="active" href="#">
                                            Attendanece Management
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Link to={"/AddAttendance"} className="btn-download">
                                <i className="bx bx-user-plus"></i>
                                <span className="text">Add Attendance</span>
                            </Link>
                            </div>

                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>All Attendance</h3>
                                        <div class="col-auto">
                                            <div class="input-group mb-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="inlineFormInputGroup"
                                                    placeholder="Search"
                                                    value={searchInput}
                                                    onChange={(e) => setSearchInput(e.target.value)}/>
                                                <div class="input-group-prepend" onClick={getAttendance}>
                                                    <div class="input-group-text">
                                                        <i class="bx bx-x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <table className="table-striped">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>EmpNo</th>
                                            <th>ContactNo</th>
                                            <th>Join</th>
                                            <th>WorkHours</th>
                                            <th>OtHours</th>
                                            <th>Shift</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {attendance.map((i, index)=>{
                                                return(
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{i.name}</td>
                                                        <td>{i.role}</td>
                                                        <td>{i.empNo}</td>
                                                        <td>{i.contactNo}</td>
                                                        <td>{i.join}</td>
                                                        <td>{i.workHours}</td>
                                                        <td>{i.otHours}</td>
                                                        <td>{i.shift}</td>
                                                        <td><Link to={`/EditAttendance/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Edit</button></Link></td>
                                                        {/* <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={(()=>deletedata(i))}>Remove</button></td> */}
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </section>
            </body>
    )
}

export default ManageAttendance