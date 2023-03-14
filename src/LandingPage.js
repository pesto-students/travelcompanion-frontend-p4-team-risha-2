import React, { useState} from 'react'
// import logo from './assests/images/logo.png';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Components/utilities/Loader/Loader';

export const LandingPage = () => {
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const errorDisplay = (e) => toast.error(e, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const dispatch = useDispatch();

    /**
     * function to Validate credentials
    */

    const validateForm = () => {
        let errors = {};

        if (!loginEmail) {
            errorDisplay("Invalid Email")
            errors.loginEmail = 'Email is required';
            // } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
            //   errors.loginEmail = 'Email is invalid';
        }
        if (!loginPassword) {
            errorDisplay("Invalid Password")
            errors.loginPassword = 'Password is required';
        } else if (loginPassword.length < 6) {
            errors.loginPassword = 'Password must be at least 6 characters long';
        }
        return errors;
    }

    /**
     * function to login credentials
    */

    const login = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setIsLoading(true); // set loading status to true
        if (Object.keys(errors).length === 0) {
            Axios({
                method: "POST",
                data: {
                    username: loginEmail,
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
                            email: loginEmail,
                            _id: res.data.userId
                        }
                    })
                    setIsLoading(false); // set loading status to true
                    navigate('homePage', { state: loginEmail })
                }
            })
                .catch((e) => {
                    errorDisplay("No User Found. Recheck Credentials")
                    setIsLoading(false); // set loading status to true
                })
        } else {
            setIsLoading(false); // set loading status to true

        }

    };

    

    return (
        isLoading ?
            <Loader /> :
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
                                                onChange={(e) => setloginEmail(e.target.value)}
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
                <div>{

                }

                </div>
            </div>
    )

}

export default LandingPage
