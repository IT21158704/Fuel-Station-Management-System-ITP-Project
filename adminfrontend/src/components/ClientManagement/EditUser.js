import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditClient(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [users, setUsers] = useState({
                name: '',
                address: '',
                email: '',
                NIC: '',
                contactNum: ''
            });

            //Fetch data
            useEffect(()=>{
                function getUsers (){
                    axios.get("http://localhost:8070/client/get/"+id)
                    .then((res)=>{
                        setUsers(res.data.admin);
                    }).catch((err)=>{
                        alert(err.message);
                    })
                }
                getUsers();
            },[id])

            const handleChange = (e) => {
                setUsers({
                  ...users,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(users); // or save the data to your backend
                axios
                .put('http://localhost:8070/client/update/' +id, users)
                .then((response) => {
                    console.log(response.data);
                    alert("User Updated");
                    navigate('/ManageClients');
                })
                .catch((error) => {
                    console.log(error);
                });
              };
            

    return(
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
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Client Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit Client</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Client</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Name</label>
                                            <input type="text" className="form-control form-control-user" name="name" id="name" value={users.name}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                                            <input type="text" id="address" className="form-control form-control-user"  name="address" value={users.address}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                            <input type="text"  className="form-control form-control-user" id="email"  name="email" value={users.email}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="NIC" className="col-sm-2 col-form-label">NIC</label>
                                            <input type="text"  className="form-control form-control-user" id="NIC" name="NIC" value={users.NIC}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="contactNum" className="col-sm-2 col-form-label">Contact</label>
                                            <input type="text" className="form-control form-control-user" id="contactNum" name="contactNum" value={users.contactNum}
                                            onChange={handleChange}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                <Link to={'/ManageUsers'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
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