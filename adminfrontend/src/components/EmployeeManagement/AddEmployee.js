import React,{useState} from "react";
import axios from "axios"
import "./crud.css";
export default function AddEmployee(){


            const [name,setName] = useState("")
            const [role,setRole] = useState("")
            const [email,setEmail] = useState("")
            const [idNo,setIDNO] = useState("")
            const [contactNO,setContactNO] = useState("")
            const [basicSallary,setBasicSallary] = useState("")
            // const [allowance,setAllowance] = useState("")
            // const [deductions,setDeductions] = useState("")
            const [join,setJoin] = useState("")
            // const [pariod,setPariod] = useState("")

  async function sendData(e) {
    e.preventDefault();
  
    const existingEmployees = await axios.get(
      "http://localhost:8070/employee"
    );
  
    const duplicateEmployee = existingEmployees.data.find(employee => employee.idNo === idNo);
  
    if (duplicateEmployee) {
      alert("Employee with this NIC already exists in the system");
      return;
    }
  
    const newEmployee = {
              name,
              role,
              email,
              idNo,
              contactNO,
              basicSallary,
              // allowance,
              // deductions,
              join
              // , pariod
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8070/employee/add",
        newEmployee
      );
  
      window.location.href = "/employeelist";
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
  
  

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
                                      <a className="active" href="/Dashboard">Home</a>
                                  </li>
                                  <li><i className='bx bx-chevron-right' ></i></li>
                                  <li>
                                      <a className="active" href="/EmployeeList" >Employee Management</a>
                                  </li>
                                  <li><i className='bx bx-chevron-right' ></i></li>
                                  <li>
                                      <a className="active" href="#">Add Employee</a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="table-data">
                          <div className="order">
                              <div className="head">
                                  <h3>Add Employee</h3>
                              </div>
                                      
                      <div class="viewform">
                        <form  onSubmit={sendData}>

                              <div class="row">
                                <div class="col-25">
                                  <label for="name">Name</label>
                                  </div>
                                <div class="col-75">
                                <input type="Name" className="form-control" id="name" placeholder="Enter name" onChange={(e) =>{  setName(e.target.value);}}/>
                              </div>
                              </div>

                              <div class="row">
                                <div class="col-25">
                                  <label for="role">Role</label>
                                  </div>
                                <div class="col-75">
                                <select className="form-control"  id="role"  onChange={(e) => { setRole(e.target.value); }} value={role}>
                              <option value="">Select job role</option>
                              <option value="Pump operrator">Pump operrator</option>
                              <option value="Fuel tank inspector">Fuel tank inspector</option>
                              <option value="Driver">Driver</option>

                            </select>

                              </div>
                              </div>

                              <div class="row">
                                <div class="col-25">
                                  <label for="email">Email</label>
                                  </div>
                                <div class="col-75">
                                <input type="Email" className="form-control" id="email" placeholder="Enter email" onChange={(e) =>{  setEmail(e.target.value);}}/>
                              </div>
                              </div>

                              <div class="row">
                                <div class="col-25">
                                <label for="idNo">IDNO</label>
                                </div>
                                <div class="col-75">
                                <input type="IDNO" className="form-control" id="idNo" placeholder="Enter nic" onChange={(e) =>{  setIDNO(e.target.value);}}/>
                              </div>
                              </div>

                              <div class="row">
                                <div class="col-25">
                                <label for="contactNO">ContactNO</label>
                                </div>
                                <div class="col-75">
                                <input type="ContactNO" className="form-control" id="contactNO" placeholder="Enter contact no" onChange={(e) =>{  setContactNO(e.target.value);}}/>
                              </div>
                              </div>

                              <div class="row">
                                <div class="col-25">
                                <label for="basicSallary">BasicSallary</label>
                                </div>
                                <div class="col-75">
                                <input type="BasicSallary" className="form-control" id="basicSallary" placeholder="Enter basic salary" onChange={(e) =>{  setBasicSallary(e.target.value);}}/>
                              </div>
                              </div>


{/* 
                              <div class="row">
                                <div class="col-25">
                                <label for="allowance">Allowance</label>
                                </div>
                                <div class="col-75">
                                <input type="Allowance" className="form-control" id="allowance" placeholder="Enter allowance" onChange={(e) =>{  setAllowance(e.target.value);}}/>
                              </div>
                              </div>


                              <div class="row">
                                <div class="col-25">
                                <label for="deductions">Deductions</label>
                                </div>
                                <div class="col-75">
                                <input type="Deductions" className="form-control" id="deductions" placeholder="Enter deductions" onChange={(e) =>{  setDeductions(e.target.value);}}/>
                              </div>
                              </div> */}


                              <div class="row">
                                <div class="col-25">
                                <label for="join">Join</label>
                                </div>
                                <div class="col-75">
                                <input type="date" className="form-control" id="join" placeholder="Enter join data" onChange={(e) =>{   setJoin(e.target.value);}}/>
                              </div>
                              </div>
{/* 
                              <div class="row">
                                <div class="col-25">
                                <label for="pariod">Pariod</label>
                                </div>
                                <div class="col-75">
                                <input type="number" className="form-control" id="pariod" placeholder="Enter Pariod" onChange={(e) =>{    setPariod(e.target.value);}}/>

                              </div>
                              </div> */}

                            <div className="submit">
                              <button type="submit" className="btn btn-primary">Add Employee</button>
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