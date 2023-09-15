import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";
import "./crud.css";

export default function EditEmployee(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [employees, setEmployees] = useState({
              name: '',
              role: '',
              email: '',
              // idNo: '',
              contactNO: '',
              basicSallary: '',
              allowance: '',
              deductions: '',
              // join: '',
              pariod: '',
              ot: '' 
            });

            //Fetch data
            useEffect(()=>{
                function getEmployees (){
                    axios.get("http://localhost:8070/employee/get/"+id)
                    .then((res)=>{
                        console.log(res);
                        setEmployees(res.data.employee);
                    }).catch((err)=>{
                       // alert(err.message);
                    })
                }
                getEmployees();
            },[id])

            const handleChange = (e) => {
                setEmployees({
                  ...employees,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(employees); // or save the data to your backend
                axios
                .put('http://localhost:8070/employee/update/' +id, employees)
                .then((response) => {
                    console.log(response.data);
                    alert("Employee Updated");
                    navigate('/EmployeeList');
                })
                .catch((error) => {
                   // console.log(error);
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
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Employee Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit Employee</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Employee</h3>
                                    </div>

                                    <div class="viewform">
                                    <form onSubmit={handleSubmit} >
                                   
                                      <div class="row">
                                      <div class="col-25">
                                      <label for="name">Name</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="name" className="form-control" name="name" id="name" value={employees.name} onChange={handleChange} placeholder="Enter update name"/>    
                                      </div>
                                      </div>  
                                      <div class="row">
                                        <div class="col-25">
                                        <label for="role">Role</label>
                                        </div>
                                        <div class="col-75">
                                        <select className="form-control" id="role"  name="role" onChange={handleChange} value={employees.role}>
                                          <option value="">Select update job role</option>
                                          <option value="Pump operrator">Pump operrator</option>
                                          <option value="Fuel tank inspector">Fuel tank inspector</option>
                                          <option value="Driver">Driver</option>
                                        </select>
                                          </div>
                                          </div>
                                      <div class="row">
                                      <div class="col-25">
                                      <label for="role">Email</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="email"  className="form-control" id="email"  name="email" value={employees.email} onChange={handleChange} placeholder="Enter update email"/> 
                                      </div>
                                      </div>

                                    {/* <div class="row">
                                      <div class="col-25">
                                      <label for="role">IdNo</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="idNo" className="form-control" name="idNo" id="idNo" value={employees.idNo}  onChange={handleChange} placeholder="Enter update id no"/>
                                    </div>
                                    </div> */}
                                    

                                    <div class="row">
                                      <div class="col-25">
                                      <label for="role">ContactNO</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="contactNO"  className="form-control" id="contactNO" name="contactNO" value={employees.contactNO}  onChange={handleChange} placeholder="Enter update contact no"/>
                                    </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-25">
                                      <label for="role">BasicSallary</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="basicSallary" className="form-control" id="basicSallary" name="basicSallary" value={employees.basicSallary} placeholder="Enter update basicsallary"
                                            onChange={handleChange}/>
                                    </div>
                                    </div>

                                     <div class="row">
                                      <div class="col-25">
                                      <label for="role">Allowance</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="allowance" className="form-control" id="allowance" name="allowance" value={employees.allowance} placeholder="Enter update allownce"
                                            onChange={handleChange}/>
                                    </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-25">
                                      <label for="role">Deductions</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="deductions" className="form-control" id="deductions" name="deductions" value={employees.deductions} placeholder="Enter update deduction"
                                            onChange={handleChange}/>
                                    </div>
                                    </div>

                                    {/* <div class="row">
                                      <div class="col-25">
                                      <label for="role">Join</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="date" className="form-control" id="join" name="join" value={employees.join} placeholder="Enter update join date"
                                            onChange={handleChange}/>
                                    </div>
                                    </div> */}

                                    <div class="row">
                                      <div class="col-25">
                                      <label for="role">WorkDays</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="pariod" className="form-control" id="pariod" name="pariod" value={employees.pariod} placeholder="Enter update work pariod"
                                            onChange={handleChange}/>
                                    </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-25">
                                      <label for="ot">OT</label>
                                       </div>
                                      <div class="col-75">
                                      <input type="ot" className="form-control" id="ot" name="ot" value={employees.ot} placeholder="Enter update OT"
                                            onChange={handleChange}/>
                                    </div>
                                    </div>
                                    
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                <Link to={'/EmployeeList'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                </body>
    )
}