import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditReading(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [users, setUsers] = useState({
                pump_number: '',
                fuel_type: '',
                date: '',
                employeeID: '',
                mReading: '',
                litterPrice: '',
                eReading: ''
            });

            //Fetch data
            useEffect(()=>{
                function getUsers (){
                    axios.get("http://localhost:8070/reservoirs/get/"+id)
                    .then((res)=>{
                        setUsers(res.data.reservoir);
                        console.log(res.data)
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
                .put('http://localhost:8070/reservoirs/update/' +id, users)
                .then((response) => {
                    console.log(response.data);
                    alert("User Updated");
                    navigate('/ReadingList');
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
                            <a href={"/ReservoirDashboard"}>
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/AddReservoir">
                                <i className='bx bx-user'></i>
                                <span className="text">Add Reading</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ReadingList">
                                <i className='bx bxs-analyse'></i>
                                <span className="text">Reading List</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ReadingListReport">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Generate Report</span>
                            </a>
                        </li>

                        <li>
                          <a href="/ReadingBackup">
                          <i className='bx bx-cloud bx-flip-horizontal' ></i>
                              <span className="text">Backup & Restore</span>
                          </a>
                            </li>
                            
                        <li>
                            <a className="logout" href="/login">
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
                                    <h1>User Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">User Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit User</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>



    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Reading</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                    

                                            
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Enter_Pump_Number</label>
                                            <select id="inputState" className="form-control form-control-user"  name="pump_number" value={users.pump_number}
                                            onChange={handleChange}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Fuel_Type</label>
                                            <select id="inputState" className="form-control form-control-user"name="fuel_type" value={users.fuel_type}
                                            onChange={handleChange}>
                                                
                                                <option>Petrol(92 Octane)</option>
                                                <option >Petrol(95 Octane)</option>
                                                <option > Diesel(Auto Diesel)</option>
                                                <option >Diesel(Lanka Super Diesel 4 star)</option>
                                                <option > Furnace Oil</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                                            <input type="date" className="form-control form-control-user" id="date"  name="date" value={users.date}
                                            onChange={handleChange}/>
                                        </div>


                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label htmlFor="employeeID" className="col-sm-2 col-form-label">Employee_ID</label>
                                            <input type="text"  className="form-control form-control-user" id="employeeID" name="employeeID"  value={users.employeeID}
                                            onChange={handleChange}/>
                                        </div>


                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label htmlFor="mReading" className="col-sm-2 col-form-label">Morning_Reading</label>
                                            <input type="text" className="form-control form-control-user" id="mReading" name="mReading" value={users.mReading}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label htmlFor="litterPrice" className="col-sm-2 col-form-label">Litter_Price:_Rs.</label>
                                            <input type="text" className="form-control form-control-user" id="litterPrice" name="litterPrice" value={users.litterPrice}
                                            onChange={handleChange}/>
                                        </div>
 
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label htmlFor="eReading" className="col-sm-2 col-form-label">Evening_Reading</label>
                                            <input type="text" className="form-control form-control-user" id="eReading" name="eReading" value={users.eReading}
                                            onChange={handleChange}/>
                                        </div>

                                        
                                        


                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                           <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                <Link to={'/ReadingList'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
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