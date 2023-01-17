import React, { useState } from 'react'
// import logo from './assests/images/logo.png';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                    type: 'LOGIN',
                    payload: {
                        id: new Date().getTime(),
                        email: loginUsername
                    }
                })
                loggedIn()
                navigate('preferences', { state: loginUsername })
            }
        });
    };

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">

                        <div className="text-center mt-4">
                            <h1 className="h2">Welcome</h1>
                            <p className="lead">
                                Login in to your account to continue
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
                                        <div className="text-center mt-3">
                                            {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                                            <button type="submit" className="btn btn-lg btn-primary" onClick={() => navigate('signIn')}>Sign in</button>
                                        </div>
                                        <ToastContainer/>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // <div classNameName='banner'>
        //     <img classNameName="logo" alt="logo" src={logo} />
        //     <h1>TRAVEL COMPANION</h1>
        //     <button classNameName='btn login-btns'><a href="http://localhost:5000/login" target="_blank" rel="noopener noreferrer">
        //     Login with google</a></button>
        //     <button classNameName='btn login-btns' onClick={() => navigate('preferences')}>Login with Facebook</button>
        //     <button classNameName='btn login-btns'>Login with Apple</button>
        //     <span>By Signing up, you agree to the travel buddies terms & condition and privacy policy </span>
        // </div>
    )

}

export default LandingPage
