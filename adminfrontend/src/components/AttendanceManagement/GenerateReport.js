import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";



import 'jspdf-autotable';

export default function GenerateReport() {
  const [attendance, setAttendance] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["Name", "Role", "Emp No", "Contact No", "Join","Work In", "Work Out", "Ot Hours", ]];

    // Add data rows
    const data = attendance.map(attendance => [attendance.name, attendance.role, attendance.empNo, attendance.contactNo, attendance.join, attendance.workIn, attendance.workOut, attendance.otHours,]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('offers.pdf');
  }

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
          <br>
          </br>
          <br>
          </br>
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Attendance Report</h1>
                        <br></br>
                                
                    </div>
                </div>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Emp No</th>
                            <th>Contact No</th>
                            <th>Join</th>
                            <th>Work In</th>
                            <th>Work Out</th>
                            <th>Ot Hours</th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {attendance.map((i, index) => {
                            return (
                                <tr key={index}>
                                <td>{i.name}</td>
                                <td>{i.role}</td>
                                <td>{i.empNo}</td>
                                <td>{i.contactNo}</td>
                                <td>{i.join}</td>
                                <td>{i.workIn}</td>
                                <td>{i.workOut}</td>
                                <td>{i.otHours}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <button  className='btn btn-primary' onClick={handlePdfGeneration}>
                    Generate PDF
                </button>
                    </div>
                </div>
                
            </main>
        </section>
        
     </body>
  );
}