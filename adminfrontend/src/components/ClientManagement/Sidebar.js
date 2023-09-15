import React from 'react';

function Sidebar(){
    return(
        <div>
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
    )
}
export default Sidebar