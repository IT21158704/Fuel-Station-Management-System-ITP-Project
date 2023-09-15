import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [Iemployees, setIEmployees] = useState([]);


  // Fetch data
  useEffect(() => {
    function getEmployees() {
      axios
        .get("http://localhost:8070/Employee/")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);

  const totalIEmployees = Iemployees.length;
  const totalEmployees = employees.length;

  return (
    <body>
      <div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./img/cpetcoLogo.png')} alt='logo'/><br/><br/>
                    <span className="brand">J.J. Dias Enterprises</span>
                    <ul className="side-menu top">
                        <li>
                            <a href={"/EmployeeDashboard"}>
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/EmployeeList">
                                <i className='bx bx-user'></i>
                                <span className="text">Employee Management</span>
                            </a>
                        </li>
                        <li>
                            <a href="/add">
                                <i className='bx bxs-analyse'></i>
                                <span className="text">Add Employee</span>
                            </a>
                        </li>
                        <li>
                            <a href="/get">
                            <i className='bx bx-user' ></i>
                                <span className="text">View Employee</span>
                            </a>
                        </li>
                        <li>
                            <a href="/EmployeeBackup">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Backup & Restore</span>
                            </a>
                        </li>

                        <li>
                            <a  href="/login">
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
                  <a href="#" className="active">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
                <h3>{totalEmployees}</h3>
                <p>Total Employees</p>
              </span>
            </li>
            <li>
              <i className='bx bx-cloud bx-flip-horizontal'></i>
              <span className="text">
                <h3>{totalEmployees}</h3>
                <p>Total Backup</p>
              </span>
            </li>
          </ul>
        </main>
      </section>
    </body>
  );
}

export default EmployeeDashboard;
