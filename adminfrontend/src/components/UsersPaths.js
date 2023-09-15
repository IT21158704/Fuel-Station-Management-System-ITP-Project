import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/paths.css';

function UsersPaths() {

  return (
    <body>
         <section class="vh-100">
                <div class="container py-5 h-100">

        <div class="container mt-5">
                    <div class="row d-flex justify-content-center align-items-center h-100"></div>
            
                <div class="row">
                <div class="col-md-4">
                <Link to={'/Dashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://img.freepik.com/free-vector/system-administrator-technical-work-with-server-software-installation-troubleshooting-online-security-configuration-computer-systems-networks-flat-vector-illustration_613284-1012.jpg?w=360" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Administrator Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/ReservoirDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://png.pngtree.com/png-clipart/20220222/original/pngtree-warehouse-workers-check-quantity-and-delivery-of-products-from-customers-purchase-png-image_7301966.png" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Reservoir Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/EmployeeDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://img.freepik.com/free-vector/asian-hr-manager-welcomes-new-employee_3446-645.jpg?w=2000" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Employee Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/FinantialDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://img.freepik.com/free-vector/business-enterprise-strategy-market-analysis-niche-selection-conquering-marketplace-studying-market-segmentation-planning-company-development_335657-2353.jpg?w=2000" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Financial Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/InventoryDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?w=2000" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Inventory Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/getDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://media.istockphoto.com/id/1155155080/vector/office-situation-partnership-flat-illustration.jpg?s=612x612&w=0&k=20&c=yabQONFzBKZfjSfTMPxUcZHTTXcAdy2upzp7Rp8q_vg=" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Supplier Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/AttendanceDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://static.vecteezy.com/system/resources/thumbnails/004/971/649/small/office-software-attendance-management-business-concept-infographics-for-web-banner-calendar-task-list-and-chart-the-user-personal-account-vector.jpg" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Attendance Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                    <Link to={'/ClientDashboard'}><div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://img.freepik.com/free-vector/customer-relationship-management-concept-illustration_114360-7652.jpg?w=2000" width="70"/>
                                <div class="d-flex flex-column ml-2"><span class="text-black-50">Client Management</span><span class="ratings"></span></div>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </body>
)}
export default UsersPaths;