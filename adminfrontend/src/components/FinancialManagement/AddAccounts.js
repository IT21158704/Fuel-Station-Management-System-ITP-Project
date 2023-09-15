import React,{useState} from "react"
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom';

export default function AddAccount(){

    const navigate = useNavigate();
    const [accountNumber, setAccNO] = useState("");
    const [accountName, setAccName] = useState("");
    const [discription, setDis] = useState("");
    const [accountType, setAcType] = useState("");
    const [amount, setAmount] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newAccount = {
            accountNumber,
            accountName,
            discription,
            accountType,
            amount
        }

        axios.post("http://localhost:8070/adminss/add",newAccount).then(()=>{
            
            alert("Account Created");
            navigate('/ManageAccounts');

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
                                    <a href={"/FinantialDashboard"}>
                                        <i className='bx bxs-dashboard' ></i>
                                        <span className="text">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/ManageAccounts">
                                        <i className='bx bx-user'></i>
                                        <span className="text">View Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/Stockreport">
                                        <i className='bx bxs-analyse'></i>
                                        <span className="text">Generate Repote</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/FinantialBackup">
                                    <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                        <span className="text">Backup & Restore</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/login">
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
                                    <h1>Finantial Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Finantial Management</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#" className='active'>Add Account</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Add Account</h3>
                                    </div>
                                    
                                    <form onSubmit={sendData} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Account Number</label>
                                            <input type="text" className="form-control form-control-user"  id="name" placeholder="Enter Account Number"
                                            onChange={(e)=>{
                                                setAccNO(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Account Name</label>
                                            <input type="text" className="form-control form-control-user"   id="name" placeholder="Enter Account Name"
                                            onChange={(e)=>{
                                                setAccName(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Discription</label>
                                            <input type="text"  className="form-control form-control-user" id="email" placeholder="Enter discription"
                                            onChange={(e)=>{
                                                setDis(e.target.value);
                                            }}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">Account Type</label>
                                            <select type="text"  className="form-control form-control-user"
                                            onChange={(e)=>{
                                                setAcType(e.target.value);
                                            }}>
                                                <option defaultValue>Choose...</option>
                                                <option>Income</option>
                                                <option>Expencess</option>
                                    </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Amount</label>
                                            <input type="text" className="form-control form-control-user" id="password" placeholder="Amount"
                                            onChange={(e)=>{
                                                setAmount(e.target.value);
                                            }}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                <Link to={'/ManageUseres'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
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