import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageClients() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch data
  function getUsers() {
    axios
      .get("http://localhost:8070/client/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getUsers(users);
    console.log()
  }, []);

  // Delete data
  function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:8070/client/delete/" + i._id)
        .then(() => {
          getUsers();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchUser() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/client/search/${searchInput}`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getUsers();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchUser();
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
                    <main>
                        <div className="head-title">
                            <div className="left">
                                <h1>Client Management</h1>
                                <ul className="breadcrumb">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                    </li>
                                    <li>
                                        <a className="active" href="#">
                                        Client Management
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Link to={"/AddClient"} className="btn-download">
                                <i className="bx bx-user-plus"></i>
                                <span className="text">Add Client</span>
                            </Link>
                            </div>

                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>All Client</h3>
                                        <div class="col-auto">
                                            <div class="input-group mb-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="inlineFormInputGroup"
                                                    placeholder="Search"
                                                    value={searchInput}
                                                    onChange={(e) => setSearchInput(e.target.value)}/>
                                                <div class="input-group-prepend" onClick={getUsers}>
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
                                            <th>Address</th>
                                            <th>Email</th>
                                            <th>NIC</th>
                                            <th>Contact No</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {users.map((i, index)=>{
                                                return(
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{i.name}</td>
                                                        <td>{i.address}</td>
                                                        <td>{i.email}</td>
                                                        <td>{i.NIC}</td>
                                                        <td>{i.contactNum}</td>
                                                        <td><Link to={`/EditClient/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Edit</button></Link></td>
                                                        <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={(()=>deletedata(i))}>Remove</button></td>
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

export default ManageClients