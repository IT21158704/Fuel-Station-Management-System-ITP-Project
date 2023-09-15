import React, { useState } from "react";

export default function PaySheet() {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const idNo = event.target.idNo.value;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8070/Employee/view/${idNo}`);
      const data = await response.json();
      if (data.employee) {
        setEmployeeData([data.employee]);
        setError(null);
      } else {
        setEmployeeData([]);
        alert("You enter does not match our records. !!");
      }
    } catch (err) {
      setError(err.message);
      setEmployeeData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <body>
        
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>View Employee</h3>
                    </div>
    <div>
      <div className="viewform2">
        <img className="brandLogo" src={require("./cpetcoLogo.png")} />
        <br />
        <br></br>
        <h3>Employee View</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" id="idNo" name="idNo"  placeholder="Enter Employee Id No" />
          <div className="submit2">
            
            <button type="submit2" className="btn btn-primary">View Employee</button>
            <br></br>
          </div>
        </form>
      </div>

      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
       
      )} */}
      {employeeData.map((employee) => (

      <div class="container mt-5 mb-5" style={{ float: "right", width: "100%" ,backgroundColor:"#f2f2f2",
      marginTop :"0.1%",marginLeft:"10%",marginRight:"0%",marginBottom:"1%" ,border:"2%",borderColor:"black" }} >
        <div class="row" >
            <div class="col-md-12">
                <div class="text-center lh-1 mb-2">
                    <h4 class="fw-bold">Payslip</h4> <span class="fw-normal"><h5>J.J. Dias Enterprises</h5></span>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-6">
                                <div style={{textAlign:"left",marginLeft:"20%"}}><h6>Date of Join :{employee.join} </h6></div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex justify-content-end">
                                <div style={{textAlign:"left"}}><h6>Name :{employee.name} </h6></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                               <div style={{textAlign:"left",marginLeft:"20%"}}><h6>Pay pariod :{employee.pariod} </h6></div>
                            </div>
                            <div class="col-md-6">
                            <div class="d-flex justify-content-end">
                            <div style={{textAlign:"left",marginLeft:"20%"}}><h6>Id No :{employee.idNo} </h6></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                        <div style={{textAlign:"left",marginLeft:"20%"}}><h6>Role :{employee.role} </h6></div>
                            </div>
                            <div class="col-md-6">
                            <div class="d-flex justify-content-end">
                            <div style={{textAlign:"left" ,marginLeft:"20%"}}><h6>Contact No :{employee.contactNO} </h6></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                                <div> <span class="fw-bolder"> </span> <small class="ms-3"></small> </div>
                            </div>
                            <div class="col-md-6">
                            <div class="d-flex justify-content-end">
                            <div style={{textAlign:"left"}}><h6>Email :{employee.email} </h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="mt-4 table table-bordered" style={{width:"98%" , marginLeft : "1%"}}>
                        <thead class="bg-dark text-white">
                            <tr>
                                <th scope="col">Earnings</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Deductions</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Basic</th>
                                <td>{employee.basicSallary}</td>
                                <td>Deductions </td>
                                <td>{employee.deductions}</td>   
                            </tr>

                            <tr>
                            <th scope="row">Allowance</th>
                                <td>{employee.allowance} </td>
                                <td>  </td>
                                <td>  </td> 
                            </tr>

                            <tr>
                            <th scope="row">OT</th>
                                <td> {employee.basicSallary/25 *  employee.ot} </td>
                                <td>  </td>
                                <td>  </td>   
                            </tr>

                            <tr>
                            <th scope="row"> - </th>
                                <td>  </td>
                                <td>  </td>
                                <td>  </td>
                            </tr>
                           
                            <tr class="border-top">
                                <th scope="row">Total Earning</th>
                                <td>{employee.allowance  + employee.basicSallary +(employee.basicSallary/25 *  employee.ot) } </td>
                                <th scope="row">Total Deductions</th>
                                <td>{employee.deductions}</td>
                            </tr>

                            <tr class="border-top">
                                <th scope="row"></th>
                                <td> </td>
                                <th scope="row" class="bg-dark text-white">Net pay</th>
                                <td class="bg-dark text-white">{employee.allowance  + employee.basicSallary +(employee.basicSallary/25 *  employee.ot)  - employee.deductions}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    </div>
))}
    </div>
    </div>
    </div>
    </body>
);
}
