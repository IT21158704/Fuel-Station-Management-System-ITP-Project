// import React,{useState, useEffect} from "react";
// import axios from "axios"
// import { useParams, Link, useNavigate } from "react-router-dom";

// export default function EditOrder(){

//             const navigate = useNavigate();
//             const {id} = useParams();
//             const [users, setUsers] = useState({
//                 fuelType:'',
//                 amount:'',
//                 orderDate:'',
//                 deliveryDate:'',
//                 price:''
//             });

//             //Fetch data
//             useEffect(()=>{
//                 function getUsers (){
//                     axios.get("http://localhost:8070/admin/get/"+id)
//                     .then((res)=>{
//                         setUsers(res.data.admin);
//                     }).catch((err)=>{
//                         alert(err.message);
//                     })
//                 }
//                 getUsers();
//             },[id])

//             const handleChange = (e) => {
//                 setUsers({
//                   ...users,
//                   [e.target.name]: e.target.value
//                 });
//               };
            
//               const handleSubmit = (e) => {
//                 e.preventDefault();
//                 console.log(users); // or save the data to your backend
//                 axios
//                 .put('http://localhost:8070/admin/update/' +id, users)
//                 .then((response) => {
//                     console.log(response.data);
//                     alert("Order Updated");
//                     navigate('/ManageOrders');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//               };
            

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
//                                             <a className="active" href="#">Edit Order</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
    
//                             <div className="table-data">
//                                 <div className="order">
//                                     <div className="head">
//                                         <h3>Edit Order</h3>
//                                     </div>
//                                     <form onSubmit={handleSubmit} >
                                        
//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="name"  className="col-sm-2 col-form-label">Fuel Type</label>
//                                             <input type="text" className="form-control form-control-user" name="name" id="name" value={users.fuelType}
//                                             onChange={handleChange}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
//                                             <input type="text" id="amount" className="form-control form-control-user"  name="amount" value={users.amount}
//                                             onChange={handleChange}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="orderDate" className="col-sm-2 col-form-label">Order Date</label>
//                                             <input type="text"  className="form-control form-control-user" id="orderDate"  name="orderDate" value={users.orderDate}
//                                             onChange={handleChange}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="deliveryDate" className="col-sm-2 col-form-label">Delivery Date</label>
//                                             <input type="text"  className="form-control form-control-user" id="deliveryDate" name="deliveryDate" value={users.deliveryDate}
//                                             onChange={handleChange}/>
//                                         </div>

//                                         <div className="col-sm-6 mb-3 mb-sm-0">
//                                             <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
//                                             <input type="text" className="form-control form-control-user" id="price" name="price" value={users.price}
//                                             onChange={handleChange}/>
//                                         </div>
//                                         <br/>
//                                         <div className="form-group row">
//                                             <div className="col-sm-6 mb-3 mb-sm-0">
//                                                 <button type="submit" className="btn btn-primary btn-sm">Save</button>
//                                                 <Link to={'/ManageOrders'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
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