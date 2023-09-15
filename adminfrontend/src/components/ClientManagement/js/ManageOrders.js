// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import ManageUseres from "../ManageUsers";

// function ManageOrders() {
//   const [users, setUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   // Fetch data
//   function getUsers() {
//     axios
//       .get("http://localhost:8070/admin/")
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//     setSearchInput("");
//   }

//   useEffect(() => {
//     getUsers(users);
//     console.log()
//   }, []);

//   // Delete data
//   function deletedata(i) {
//     if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
//       axios
//         .delete("http://localhost:8070/admin/delete/" + i._id)
//         .then(() => {
//           getUsers();
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     }
//   }

//   // Search data
//   function searchUser() {
//     if (searchInput !== "") {
//       axios
//         .get(`http://localhost:8070/admin/search/${searchInput}`)
//         .then((res) => {
//           setUsers(res.data);
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     } else {
//       getUsers();
//     }
//   }

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       searchUser();
//     }, 1000);
//     return () => clearTimeout(delayDebounceFn);
//   }, [searchInput]);

//   return (
//             <body>
//                 <section id="content">
//                     <main>
//                         <div className="head-title">
//                             <div className="left">
//                                 <h1>Client Management</h1>
//                                 <ul className="breadcrumb">
//                                     <li>
//                                         <a href="#">Home</a>
//                                     </li>
//                                     <li>
//                                         <i className="bx bx-chevron-right"></i>
//                                     </li>
//                                     <li>
//                                         <a className="active" href="#">
//                                         Client Management
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <Link to={"/AddOrder"} className="btn-download">
//                                 <i className="bx bx-user-plus"></i>
//                                 <span className="text">All Order</span>
//                             </Link>
//                             </div>

//                             <div className="table-data">
//                                 <div className="order">
//                                     <div className="head">
//                                         <h3>All Client</h3>
//                                         <div class="col-auto">
//                                             <div class="input-group mb-2">
//                                                 <input
//                                                     type="text"
//                                                     class="form-control"
//                                                     id="inlineFormInputGroup"
//                                                     placeholder="Search"
//                                                     value={searchInput}
//                                                     onChange={(e) => setSearchInput(e.target.value)}/>
//                                                 <div class="input-group-prepend" onClick={getUsers}>
//                                                     <div class="input-group-text">
//                                                         <i class="bx bx-x"></i>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                 </div>

//                                 <table className="table-striped">
//                                     <thead>
//                                         <tr>
//                                             <th>No</th>
//                                             <th>FuelTYpe</th>
//                                             <th>Amount</th>
//                                             <th>OrderDate</th>
//                                             <th>DeliveryDate</th>
//                                             <th>Amount</th>
//                                             <th></th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                             {users.map((i, index)=>{
//                                                 return(
//                                                     <tr>
//                                                         <td>{index+1}</td>
//                                                         <td>{i.fuelType}</td>
//                                                         <td>{i.amount}</td>
//                                                         <td>{i.orderDate}</td>
//                                                         <td>{i.deliveryDte}</td>
//                                                         <td>{i.price}</td>
//                                                         <td><Link to={`/EditUser/${i._id}`}><button type="button" className="btn btn-outline-success btn-sm" >Edit</button></Link></td>
//                                                         <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={(()=>deletedata(i))}>Remove</button></td>
//                                                     </tr>
//                                                 )
//                                             })}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </main>
//                 </section>
//             </body>
//     )
// }


// export default ManageOrders