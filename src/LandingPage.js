import React, { useState } from 'react'
// import logo from './assests/images/logo.png';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export const LandingPage = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();
    const loggedIn = () => toast.success('Logged In Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const dispatch = useDispatch()

    const login = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/login",
        }).then((res) => {
            if (res.status === 200) {
                dispatch({
                    type: 'SET_TOKEN',
                    payload: {
                        token: res.data.token,
                        email: loginUsername,
                        _id: res.data.userId
                    }
                })
                loggedIn()
                navigate('homePage', { state: loginUsername })
            }
        });
    };

    return (
        <div className="row container bg-img-sign-up percent-100">
            {/* <div className='col-sm-10 col-md-4 col-lg-6 d-table h-100'>
                    <SignIn />
                </div> */}
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100 ">
                <div className="d-table-cell align-middle">


                    <div className="card">
                        <div className="card-body">
                            <div className="m-sm-4">
                                <div className="text-center mt-4">
                                    <h1 className="h2">Welcome</h1>
                                    <p className="lead">
                                        Login in to your account to continue
                                    </p>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                                            onChange={(e) => setLoginUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"
                                            onChange={(e) => setLoginPassword(e.target.value)}
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
                                        <button type="submit" className="btn btn-lg btn-primary" onClick={login}>log in</button>
                                    </div>
                                    <p className="text-center">or</p>
                                    <div className="text-center mt-3">
                                        {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                                        <button type="submit" className="btn btn-lg btn-primary" onClick={() => navigate('signIn')}>Create Account</button>
                                    </div>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default LandingPage
