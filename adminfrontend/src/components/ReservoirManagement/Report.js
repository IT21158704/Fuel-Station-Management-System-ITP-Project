import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import { Link } from "react-router-dom";

import 'jspdf-autotable';

export default function Readinglistreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:8070/reservoirs/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["Pump Number", "Fuel Type", "Date", "Employee ID", "Morning Reading","Litter Price", "Evening Reading",]];

    // Add data rows
    const data = users.map(user => [user.pump_number,user.fuel_type,user.date, user.employeeID, user.mReading, user.litterPrice,user.eReading]);

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
          <br>
          </br>
          <br>
          </br>
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Reading Reports</h1>
                        <br></br>
                                
                    </div>
                </div>

                
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>
                                           <th>Pump Number</th>
                                            <th>Fuel Type</th>
                                            <th>Date</th>
                                            <th>Employee ID</th>
                                            <th>Morning Reading</th>
                                            <th>Litter Price</th>
                                            <th>Evening reading</th>
                            <th></th>
                        </tr>
                        </thead>
                      
                        <tbody>
                        {users.map((i, index) => {
                            return (
                                  <tr key={index}>
                                  <td>{i.pump_number}</td>
                                  <td>{i.fuel_type}</td>
                                  <td>{i.date}</td>
                                  <td>{i.employeeID}</td>
                                  <td>{i.mReading}</td>
                                  <td>{i.litterPrice}</td>
                                  <td>{i.eReading}</td> 
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