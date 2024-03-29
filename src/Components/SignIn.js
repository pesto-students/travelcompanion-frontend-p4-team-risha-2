import React, { useState } from 'react'
// import logo from './assests/images/logo.png';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Loader from './utilities/Loader/Loader';
import SearchLocations from './SearchLocations';

export const SignIn = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Iam, setIam] = useState("");
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [intrest, setIntrest] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // const [data, setLocation] = useState(null);
    const navigate = useNavigate();

    /**
     * 
     * @param {*} e 
     * toast ui customization
     * @returns toast
     */

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


    /**
     * function to check if all user fields are filled.
    */

    const validateForm = () => {
        let errors = {};

        if (!registerUsername || !registerPassword || !email || !phone || !Iam || !location || !gender || !intrest) {
            errors.loginEmail = 'Error';
        }
        return errors;
    }

    /**
     * 
     * @param {*} e 
     * Registration form post API 
     */

    const register = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setIsLoading(true);
        if (Object.keys(errors).length === 0) {
            Axios({
                method: "POST",
                data: {
                    username: registerUsername,
                    password: registerPassword,
                    email: email,
                    phone: phone,
                    Iam: Iam,
                    location: location,
                    gender: gender,
                    intrest: intrest,
                },
                url: "https://travelcompanion-q32wjds34a-as.a.run.app/register",
            }).then((res) => {
                setIsLoading(false);
                errorDisplay("User Created Succesfuuly, Please login");
                navigate('', { state: registerUsername })
            });
        } else {
            errorDisplay("Please Fill all the Details");
            setIsLoading(false);
        }
    };

    function handleData(dataFromChild) {
        setLocation(dataFromChild);
    }

    return (
        isLoading ?
            <Loader /> :
            <div className="container h-100 bg-img-sign-up">
                <div className="row">

                    <div className='col-lg-4 m-auto text-light py-5'>
                        <h1>Already have a account?</h1>
                        <h3>Lets jump into the adventure</h3>
                        Explore the world with ease
                        <div className="mt-3">
                            {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                            <button type="submit" className="btn btn-lg btn-primary" onClick={() => navigate('/')}>Log In</button>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-8 col-lg-5 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <div className="my-4">
                                            <h1>
                                                Lets get started
                                            </h1>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label>UserName</label>
                                                <input className="form-control form-control-lg" type="text" name="username" placeholder="Enter your UserName"
                                                    onChange={(e) => setRegisterUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="text" className="form-control form-control-lg" id="phone"
                                                    maxLength={10}
                                                    name='phone'
                                                    // value={prefernceData?.fields?.phone}
                                                    placeholder="Enter Phone Number"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className='form-group mb-3' onChange={(e) => setIam(e.target.value)}>
                                                <label htmlFor="exampleFormControlSelect2">I’m a </label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="Iam" id="travellerID" value="Traveller" required
                                                    />
                                                    <label className="form-check-label" htmlFor="travellerID">
                                                        Traveller
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="Iam" id="serviceProviderID" value="Service Provider" required
                                                    />
                                                    <label className="form-check-label" htmlFor="serviceProviderID">
                                                        Service Provider
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="location">I am based out of</label>
                                                
                                                <SearchLocations  onData={handleData}/>

                                                
                                            </div>
                                            <div className="form-group mb-3 col-md-4"
                                                // value={prefernceData?.fields?.gender}
                                                onChange={(e) => setGender(e.target.value)}>
                                                <label htmlFor="exampleFormControlSelect2">Gender</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" id="femaleID" value="female" required
                                                    />
                                                    <label className="form-check-label" htmlFor="femaleID">
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" id="maleId" value="male" required
                                                    />
                                                    <label className="form-check-label" htmlFor="maleID">
                                                        Male
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3"
                                                // name="intrest" value={fields.intrest}
                                                onChange={(e) => setIntrest(e.target.value)}
                                            >
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="intrest" id="adventure" value="adventure" />
                                                    <label className="form-check-label" htmlFor="adventure">adventure</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="intrest" id="shopping" value="shopping" />
                                                    <label className="form-check-label" htmlFor="shooping">shopping</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="intrest" id="culture" value="culture" />
                                                    <label className="form-check-label" htmlFor="culture">culture</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="intrest" id="waterfall" value="waterfall" />
                                                    <label className="form-check-label" htmlFor="waterfall">waterfall</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="intrest" id="historical" value="historical" />
                                                    <label className="form-check-label" htmlFor="historical">historical</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="intrest" id="beaches" value="beaches" />
                                                    <label className="form-check-label" htmlFor="beaches">beaches</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Create Password</label>
                                                <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"
                                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                                />
                                                <small>
                                                    <p>By continuing you agree to terms & conditions and Privacy Policy</p>
                                                </small>
                                            </div>
                                            {/* <div>
                                            <div className="custom-control custom-checkbox align-items-center">
                                                <input type="checkbox" className="custom-control-input" value="remember-me" name="remember-me" checked="" />
                                                <label className="custom-control-label text-small">Remember me next time</label>
                                            </div>
                                        </div> */}
                                            <div className="text-center mt-3">
                                                {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                                                <button type="submit" className="btn btn-lg btn-primary" onClick={register}>Create Account</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <ToastContainer />
            </div>
    )

}

export default SignIn
