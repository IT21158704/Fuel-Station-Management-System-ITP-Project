import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8070/admin/login", { userName, password });
      if (response.data === "Exist") {
        alert("Login successful");
        navigate('/UsersPaths');
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred, please try again");
    }
  };

  return (
    <body>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" >
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img className="img-fluid" alt="Sample image" src={require('./img/img1.jpg')} />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                            <div class="card-body p-4 p-lg-5 text-black">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <h3 class="fw-normal mb-3 pb-3" >SignIn to your Account</h3>
                                            <label class="form-label" for="form2Example17" htmlFor="userName">User Name:</label>
                                            <input
                                                class="form-control form-control-lg" 
                                                type="text"
                                                id="userName"
                                                value={userName}
                                                onChange={(event) => setUserName(event.target.value)}
                                                required
                                            />
                                        <label class="form-label" for="form2Example17" htmlFor="password">Password:</label>
                                        <input
                                            class="form-control form-control-lg" 
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            required
                                        />
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <div class="pt-1 mb-4">
                                            <br/>
                                            <button class="btn btn-dark btn-lg"  type="submit">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
        </body>
  );
}

export default Login;
