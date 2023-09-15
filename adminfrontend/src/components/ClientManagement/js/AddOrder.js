// import React,{useState} from "react"
// import axios from "axios"
// import {useNavigate, Link} from 'react-router-dom';

// export default function AddOrder(){

//     const navigate = useNavigate()
//     const [fuelType, setName] = useState("");
//     const [amount, setRole] = useState("");
//     const [orderDate, setEmail] = useState("");
//     const [deliveryDate, setUserName] = useState("");
//     const [price, setPassword] = useState("");

//     function sendData(e){
//         e.preventDefault();
        
//         const newUser = {
//             fuelType,
//             amount,
//             orderDate,
//             deliveryDate,
//             price
//         }

//         axios.post("http://localhost:8070/admin/add",newOrder).then(()=>{
            
//             alert("Order Created");
//             navigate('/ManageOrders');

//         }).catch((err)=>{
//             alert(err)
//         })

//     }

//     return(
//                 <body>
//                     <section id="content">
                        
//                         <main>
//                             <div className="head-title">
//                                 <div className="left">
//                                     <h1>Client Management</h1>
//                                     <ul className="breadcrumb">
//                                         <li>
//                                             <a href="#">Home</a>
//                                         </li>
//                                         <li><i className='bx bx-chevron-right' ></i></li>
//                                         <li>
//                                             <a href="#">Client Management</a>
//                                         </li>
//                                         <li><i className='bx bx-chevron-right' ></i></li>
//                                         <li>
//                                             <a href="#" className='active'>Add Order</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
    
//                             <div className="table-data">
//                                 <div className="order">
//                                     <div className="head">
//                                         <h3>Add Order</h3>
//                                     </div>
                                    
//                                     <form onSubmit={sendData} >
                                        
//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="fuelType"  className="col-sm-2 col-form-label">Fuel Type</label>
//                                             <input type="text" className="form-control form-control-user"  id="fuelType" placeholder="Enter fuelType"
//                                             onChange={(e)=>{
//                                                 setName(e.target.value);
//                                             }}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="inputState" className="col-sm-2 col-form-label">Amount</label>
//                                             <input type="text" id="inputState" className="form-control form-control-user" placeholder="Enter Amount"
//                                             onChange={(e)=>{
//                                                 setRole(e.target.value);
//                                             }}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="orderDate" className="col-sm-2 col-form-label">Order date</label>
//                                             <input type="text"  className="form-control form-control-user" id="orderDate" placeholder="Enter orderdate"
//                                             onChange={(e)=>{
//                                                 setEmail(e.target.value);
//                                             }}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="userName" className="col-sm-2 col-form-label">Delivery date</label>
//                                             <input type="text"  className="form-control form-control-user" id="userName" placeholder="Enter deliverydate"
//                                             onChange={(e)=>{
//                                                 setUserName(e.target.value);
//                                             }}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="password" className="col-sm-2 col-form-label">Price</label>
//                                             <input type="text" className="form-control form-control-user" id="password" placeholder="price"
//                                             onChange={(e)=>{
//                                                 setPassword(e.target.value);
//                                             }}/>
//                                         </div>
//                                         <br/>
//                                         <div className="form-group row">
//                                             <div className="col-sm-6 mb-3 mb-sm-0">
//                                                 <button type="submit" className="btn btn-primary btn-sm">Submit</button>
//                                                 <Link to={'/ManageOrders'}><button type="reset" className="btn btn-danger btn-sm">Cancel</button></Link>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </main>
//                     </section>
//                 </body>
//     )
// }