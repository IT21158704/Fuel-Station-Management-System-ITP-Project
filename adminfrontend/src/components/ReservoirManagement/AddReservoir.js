import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddReservoir(){

    const navigate = useNavigate();
    const [pump_number, setPump_Number] = useState("");
    const [fuel_type, setFuel_Type] = useState("");
    const [date, setDate] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    const [mReading, setMReading] = useState("");
    const [litterPrice, setLitterPrice] = useState("");
    const [eReading, setEReading] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newReservoir = {
        pump_number,
        fuel_type,
        date,
        employeeID,
        mReading,
        litterPrice,
        eReading
        }

        axios.post("http://localhost:8070/reservoirs/add",newReservoir).then(()=>{
            
            alert("User Created");
            navigate('/ReadingList');

        }).catch((err)=>{
            alert(err)
        })

    }

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
                                    <h1>Reservoir Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Reservoir Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#" className='active'>Add Reading</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add Reading</h3>
                                    </div>
                                    
                                    <form onSubmit={sendData} >
                                        
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Enter_Pump_Number</label>
                                            <select id="inputState" className="form-control form-control-user" 
                                            onChange={(e)=>{
                                                setPump_Number(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                    <option>13</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Fuel_Type</label>
                                            <select id="inputState" className="form-control form-control-user" 
                                            onChange={(e)=>{
                                                setFuel_Type(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                <option >Petrol(92 Octane)</option>
                                                <option >Petrol(95 Octane)</option>
                                                <option > Diesel(Auto Diesel)</option>
                                                <option >Diesel(Lanka Super Diesel 4 star)</option>
                                                <option > Furnace Oil</option>
                                            </select>
                                        </div>



                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                                            <input type="date"className="form-control form-control-user" id="date" placeholder="Enter Date" onChange={(e) =>{
                                             setDate(e.target.value);}}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="employeeID" className="col-sm-2 col-form-label">Employee_ID</label>
                                            <input type="text"  className="form-control form-control-user" id="employeeID" placeholder="Enter Employee ID"
                                            onChange={(e)=>{
                                                setEmployeeID(e.target.value);
                                            }}/>
                                        </div>
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="mReading" className="col-sm-2 col-form-label">Morning_Reading</label>
                                            <input type="text" className="form-control form-control-user" id="mReading" placeholder="Enter Morning Reading"
                                            onChange={(e)=>{
                                                setMReading(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="litterPrice" className="col-sm-2 col-form-label">Litter_Price:_Rs.</label>
                                            <input type="text" className="form-control form-control-user" id="litterPrice" placeholder="Enter Litter Price"
                                            onChange={(e)=>{
                                                setLitterPrice(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="eReading" className="col-sm-2 col-form-label">Evening_Reading</label>
                                            <input type="text" className="form-control form-control-user" id="eReading" placeholder="Enter Evening Reading"
                                            onChange={(e)=>{
                                                setEReading(e.target.value);
                                            }}/>
                                        </div>



                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ReadingList'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
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