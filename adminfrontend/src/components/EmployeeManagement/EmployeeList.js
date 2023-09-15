import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch data
  function getEmployees() {
    axios
      .get("http://localhost:8070/employee/")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getEmployees();
  }, []);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["name", "role", "email", "idNo", "contactNO","basicSallary", "allowance", "deductions","join","pariod","ot",]];

    // Add data rows
    const data = employees.map(employee => [employee.name, employee.role, employee.email, employee.idNo, employee.contactNO, employee.basicSallary,employee.allowance,employee.deductions,employee.join,employee.pariod,employee.ot]);



    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('offers.pdf');
  }



  // Delete data
  const handleRemoveEmployee = async (employee) => {
    if (window.confirm('Do you want to delete "' + employee.name + '" ?')) {
      await axios
        .delete(`http://localhost:8070/employee/delete/${employee._id}`)
        .then(() => {
          setEmployees((prevEmployees) =>
            prevEmployees.filter((emp) => emp._id !== employee._id)
          );
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

   // Search data
  function searchEmployee() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/employee/search/${searchInput}`)
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getEmployees();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchEmployee();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return (
    <body><div>
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
              <h1>Employee Management</h1>
              <ul className="breadcrumb">
                <li>
                  <a className="active" href="/Dashboard">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Employee Management
                  </a>
                </li>
              </ul>
            </div>
            <Link to={"/add"} className="btn-download">
              <i className="bx bx-user-plus"></i>
              <span className="text">Add Employee</span>
            </Link>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>All Employees</h3>
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Search"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <div class="input-group-prepend">
                      <div
                        class="input-group-text"
                        onClick={() => setSearchInput("")}
                      >
                        <i class="bx bx-x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <table className="table-striped">
                <thead>
                             <tr>
                                      <th>Name</th>
                                      <th>Role</th>
                                      <th>Email</th>
                                      <th>Idno</th>
                                      <th>ContactNo</th>
                                      <th>Basic</th>
                                      <th>Allowance_</th>
                                      <th>Deductions</th>
                                      <th>Join</th>
                                      <th>WorkDays</th>
                                      <th>_OT</th>
                                      <th>Edit </th>
                                      <th>Remove </th>
                                      </tr>
                                    </thead>
                                    <tbody className="tb">
                                        {employees.map((employee) => (
                                          <tr key={employee._id} >
                                            
                                            <td>{employee.name}</td>
                                            <td>{employee.role}</td>
                                            <td>{employee.email} </td>
                                            <td>{employee.idNo}</td>
                                            <td>{employee.contactNO}</td>
                                            <td>{employee.basicSallary}</td>
                                            <td>{employee.allowance}</td>
                                            <td>{employee.deductions}</td>
                                            <td>{employee.join}</td>
                                            <td>{employee.pariod}</td>
                                            <td>{employee.ot}</td>
                                            
                                            <td><Link to={`/EditEmployee/${employee._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Edit</button></Link></td>
                                            <td>
                                    <button
                                      type="button"
                                      className="btn btn-secondary btn-sm"
                                      onClick={() => handleRemoveEmployee(employee)}
                                    >
                                      Remove
                                    </button>
                                  </td>            
                                  </tr>
                              ))}
                              </tbody>
                                </table>
                                <button  className='btn btn-primary' onClick={handlePdfGeneration}>Generate Report</button>
                            </div>
                        </div>
                    </main>
                </section>
            </body>
    )
}