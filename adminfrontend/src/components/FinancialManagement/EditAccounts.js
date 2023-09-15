import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditAccount(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [account, setAccount] = useState({
                accountNumber: '',
                accountName: '',
                discription: '',
                accountType: '',
                amount: ''
            });

            //Fetch data
            useEffect(()=>{
                function getAccount (){
                    axios.get("http://localhost:8070/adminss/get/"+id)
                    .then((res)=>{
                        setAccount(res.data.admin);
                    }).catch((err)=>{
                        alert(err.message);
                    })
                }
                getAccount();
            },[id])

            const handleChange = (e) => {
                setAccount({
                  ...account,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(account); // or save the data to your backend
                axios
                .put('http://localhost:8070/adminss/update/' +id, account)
                .then((response) => {
                    console.log(response.data);
                    alert("Account Updated");
                    navigate('/ManageAccounts');
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
                                    <h1>Account Management</h1>
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Edit Account</a>
                                        </li>
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit Account</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Account</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">Account Number</label>
                                            <input type="text" className="form-control form-control-user" name="accountNumber" id="accountNumber" value={account.accountNumber}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Account Type</label>
                                            <select id="inputState" className="form-control form-control-user"  name="accountType" value={account.accountType}
                                            onChange={handleChange}>
                                                <option>Income</option>
                                                <option>Expencess</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">Discription</label>
                                            <input type="text"  className="form-control form-control-user" id="discription"  name="discription" value={account.discription}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">Account Name</label>
                                            <input type="text"  className="form-control form-control-user" id="accountName" name="accountName" value={account.accountName}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Amount</label>
                                            <input type="text" className="form-control form-control-user" id="amount" name="amount" value={account.amount}
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