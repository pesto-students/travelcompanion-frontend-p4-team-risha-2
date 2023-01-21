import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditProfile() {
    const navigate = useNavigate();
    const notify = () => toast.success('Saved User Details', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const [state, setState] = useState({
        name: null,
        email: "",
        phone: "",
        Iam: "",
        location: "",
        gender: "",
        id: ""
    })
    const userDetails = useSelector(state => state.loggedInUser);
    const id_val = userDetails[0]?.id
    React.useEffect(() => {
        if (!id_val) {
            navigate('/')
        } else {
            axios.get(`http://localhost:5000/preferences/${id_val}`,)
                .then(response => {
                    setState({
                        name: response.data.name,
                        email: response.data.email,
                        phone: response.data.phone
                    });
                })
                .catch(Err => {
                    console.log(Err)
                })
        }

    }, []); 

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    function saveChanges(event) {
        event.preventDefault();
        if (state.name && state.email) {
            axios.post('http://localhost:5000/preferences/', state)
                .then(response => {
                    console.log(response)
                    notify()
                })
                .catch(Err => {
                    console.log(Err)
                })
        }
    }


    return (
        <div className="container-xl px-4 mt-4">
            {/* <!-- Account page navigation--> */}
            <nav className="nav nav-borders">
                <ul className="nav profile-navbar">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <i className="mdi mdi-account-outline"></i>
                            Feed
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-newspaper"></i>
                            Travel
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/influncers')}>
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-calendar"></i>
                            Influncers
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/notification')}>
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-calendar"></i>
                            Notifications
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/EditProfile')}>
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-attachment"></i>
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-4">
                    {/* <!-- Profile picture card--> */}
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            {/* <!-- Profile picture image--> */}
                            <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            {/* <!-- Profile picture help block--> */}
                            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            {/* <!-- Profile picture upload button--> */}
                            <button className="btn btn-primary" type="button">Upload new image</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    {/* <!-- Account details card--> */}
                    <div className="card mb-4">
                        <div className="card-header">User Details {state.name}</div>
                        <div className="card-body">
                            <form>
                                {/* <!-- Form Group (username)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                                    <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" name={state.name || ''} defaultValue={state.name || ''} onChange={handleChange} />
                                </div>
                                {/* <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                                        <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLocation">Location</label>
                                        <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" onChange={handleChange} />
                                    </div>
                                </div> */}
                                {/* <!-- Form Group (email address)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name={state.email} defaultValue={state.email || ''} onChange={handleChange} />
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (phone number)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name={state.phone} defaultValue={state.phone || ''} onChange={handleChange} />
                                    </div>
                                    {/* <!-- Form Group (birthday)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                        <input className="form-control" id="inputBirthday" type="text" placeholder="Enter your birthday" name={state.location} defaultValue={state.location || ''} onChange={handleChange} />
                                    </div>
                                </div>
                                {/* <!-- Save changes button--> */}
                                <button className="btn btn-primary" type="button" onClick={saveChanges}>Save changes</button>
                                <ToastContainer position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile