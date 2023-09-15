import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";



import 'jspdf-autotable';

export default function Ordersreport() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:8070/orderss/")
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
    const header = [["Fuel Type", "Amount", "Order Date", "Delivery Date", "Price","Date",]];

    // Add data rows
    const data = users.map(user => [user.fuelType, user.amount, user.orderDate, user.deliveryDate, user.price]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('Orders.pdf');
  }

  return (
    <body><div>
    <section id="sidebar">
            <br/><img className='brandLogo' src={require('./img/cpetcoLogo.png')} alt='logo'/><br/><br/>
            <span className="brand">J.J. Dias Enterprises</span>
            <ul className="side-menu top">
                <li>
                    <a href={"/ClientDashboard"}>
                        <i className='bx bxs-dashboard' ></i>
                        <span className="text">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/ManageClients">
                        <i className='bx bx-user'></i>
                        <span className="text">Client Management</span>
                    </a>
                </li>
                <li>
                    <a href="/ManageOrders">
                    <i className='bx bx-cloud bx-flip-horizontal' ></i>
                        <span className="text">Client Order Management</span>
                    </a>
                </li>
                <li>
                    <a href="/Ordersreport">
                    <i className='bx bx-cloud bx-flip-horizontal' ></i>
                        <span className="text">Generate Report</span>
                    </a>
                </li>
                
                <li>
                    <a href="/ClientBackup">
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
                        <h1>Client Orders Report</h1>
                        <br></br>
                                
                    </div>
                </div>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>
                                <th>Fuel Type</th>
                                <th>Amount</th>
                                <th>Order Date</th>
                                <th>Delivery Date</th>
                                <th>Price</th>
                                
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {users.map((i, index) => {
                            return (
                                <tr key={index}>
                                <td>{i.fuelType}</td>
                                <td>{i.amount}</td>
                                <td>{i.orderDate}</td>
                                <td>{i.deliveryDate}</td>
                                <td>{i.price}</td>
                               
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