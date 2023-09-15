import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function FinantialViewDetails(){
    const {id} = useParams();
    const [accounts, setAccount] = useState([]);

  // Fetch data
  
  function getAccount() {
    axios
      .get("http://localhost:8070/adminss/get/"+id)
      .then((res) => {
        setAccount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getAccount();
  }, []);

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
                                <h1>Session Management</h1>
                                <ul className="breadcrumb">
                                    <li>
                                        <a href="#" className='active'>Generate Report</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="table-data">
                            <div className="order">
                                <div className="head">
                                    <h3>Generate Report</h3>
                                </div>
                                <table className="table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Account Number</th>
                                                    <th>Account Name</th>
                                                    <th>Discription</th>
                                                    <th>Account Type</th>
                                                    <th>Amount</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>  
                                                <div>
                                                    {accounts.map((i) =>{
                                                        return(
                                                            <tr>
                                                                <td>{id}</td>
                                                                <td>{i.accountNumber}</td>
                                                                <td>{i.accountName}</td>
                                                                <td>{i.discription}</td>
                                                                <td>{i.accountType}</td>
                                                                <td>{i.amount}</td>
                                                                <td><button type="button" className="btn btn-outline-success btn-sm" >Edit</button></td>
                                                                <td><button type="button" className="btn btn-outline-danger btn-sm">Remove</button></td>
                                                            
                                                            </tr>
                                                        )
                                                     })}
                                                  </div>   
                                            </tbody>
                                        </table>
                            </div>
                        </div>
                    </main>
                </section>
            </body>
    )

}