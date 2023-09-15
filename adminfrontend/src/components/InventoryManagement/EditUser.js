import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function InventoryEditUser(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [users, setUsers] = useState({
                EngineModel: '',
                Brand: '',
                Grade: '',
                CustomerContactNumber: ''
            });

            //Fetch data
            useEffect(()=>{
                function getUsers (){
                    axios.get("http://localhost:8070/inventory/get/"+id)
                    .then((res)=>{
                        console.log(res);
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
                .put('http://localhost:8070/inventory/update/' +id, users)
                .then((response) => {
                    console.log(response.data);
                    alert("Updated");
                    navigate('/InventoryManageUseres');
                })
                .catch((error) => {
                    console.log(error);
                });
              };
            

    return(
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
                        <main>
                            <div className="head-title">
                                <div className="left">
                                    <h1>Check Oil Mart</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Check Oil Mart</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit Oil Mart</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Oil Mart</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Engine Model</label>
                                            <input type="text" className="form-control form-control-user" name="EngineModel" id="EngineModel" value={users.EngineModel}
                                            onChange={handleChange}/>
                                        </div>
                                        

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Brand</label>
                                            <input type="text"  className="form-control form-control-user" id="Brand"  name="Brand" value={users.Brand}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">Grade</label>
                                            <input type="text"  className="form-control form-control-user" id="Grade" name="Grade" value={users.Grade}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">CustomerContactNumber</label>
                                            <input type="text" className="form-control form-control-user" id="CustomerContactNumber" name="CustomerContactNumber" value={users.CustomerContactNumber}
                                            onChange={handleChange}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                <Link to={'/ManageUseres'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
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