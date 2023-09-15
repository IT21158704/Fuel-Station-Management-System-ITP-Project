import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";



import 'jspdf-autotable';

export default function InventoriReport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:8070/inventory/")
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
    const header = [[ "Enigine Model", "Brand", "Grade", "Customer Contact Number"]];

    // Add data rows
    const data = users.map(user => [user.EngineModel, user.Brand, user.Grade, user.CustomerContactNumber]);

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
          <br>
          </br>
          <br>
          </br>
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Crips Crops Report</h1>
                        <br></br>
                                
                    </div>
                </div>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>
                                <th>Engine Model</th>
                                <th>Brand</th>
                                <th>Grade</th>
                                <th>Contact Number</th>
                               
                           
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {users.map((i, index) => {
                            return (
                                <tr key={index}>
                                <td>{i.EngineModel}</td>
                                <td>{i.Brand}</td>
                                <td>{i.Grade}</td>
                                <td>{i.CustomerContactNumber}</td>
                               
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