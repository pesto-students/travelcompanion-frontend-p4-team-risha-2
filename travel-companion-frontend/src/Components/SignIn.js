import React, { useState } from 'react'
// import logo from './assests/images/logo.png';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";

export const SignIn = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/register",
        }).then((res) => console.log(res));
    };
    const getUser = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/user",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">

                        <div className="text-center mt-4">
                            <h1 className="h2">Welcome </h1>
                            <p className="lead">
                                Sign in to your account to continue
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="m-sm-4">
                                    <div className="text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Andrew Jones" className="img-fluid rounded-circle" width="132" height="132"
                                        />
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                                                onChange={(e) => setRegisterUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"
                                                onChange={(e) => setRegisterPassword(e.target.value)}
                                            />
                                            {/* <small>
                                                <a href="pages-reset-password.html">Forgot password?</a>
                                            </small> */}
                                        </div>
                                        {/* <div>
                                            <div className="custom-control custom-checkbox align-items-center">
                                                <input type="checkbox" className="custom-control-input" value="remember-me" name="remember-me" checked="" />
                                                <label className="custom-control-label text-small">Remember me next time</label>
                                            </div>
                                        </div> */}
                                        <div className="text-center mt-3">
                                            {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                                            <button type="submit" className="btn btn-lg btn-primary" onClick={register}>Sign in</button>
                                        </div>
                                        <div className="text-center mt-3">
                                            {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                                            <button type="submit" className="btn btn-lg btn-primary" onClick={() => navigate('/')}>Login in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignIn
