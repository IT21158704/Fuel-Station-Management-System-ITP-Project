import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";



import 'jspdf-autotable';

export default function Stockreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:8070/adminss/")
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
    const header = [["", "Account Number", "Account Name", "Discription", "ACCOUNT Type","Amount"]];

    // Add data rows
    const data = users.map(user => [user.accountNumber, user.accountName, user.discription, user.accountType, user.amount ]);

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
                            <a href={"/FinantialDashboard"}>
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ManageAccounts">
                                <i className='bx bx-user'></i>
                                <span className="text">View Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Stockreport">
                                <i className='bx bxs-analyse'></i>
                                <span className="text">Generate Repote</span>
                            </a>
                        </li>
                        <li>
                            <a href="/FinantialBackup">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Backup & Restore</span>
                            </a>
                        </li>
                        <li>
                            <a href="/login">
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
                        <h1>Financial Report</h1>
                        <br></br>
                                
                    </div>
                </div>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>
                                <th>Account Number</th>
                                <th>Account Name</th>
                                <th>Discription</th>
                                <th>Account Type</th>
                                <th>Amount</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {users.map((i, index) => {
                            return (
                                <tr key={index}>
                                <td>{i.accountNumber}</td>
                                <td>{i.accountName}</td>
                                <td>{i.discription}</td>
                                <td>{i.accountType}</td>
                                <td>{i.amount}</td>
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