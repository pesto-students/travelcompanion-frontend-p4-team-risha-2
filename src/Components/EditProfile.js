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
    const [data, setdata] = useState({
        name: null,
        email: "",
        phone: "",
        Iam: "",
        password: "",
        gender: "",
        id: ""
    })
    const id = useSelector(state => state._id);
    React.useEffect(() => {
        if (!id) {
            // navigate('/')
        } else {
            debugger
            axios.get(`http://localhost:5000/preferences/${id}`,)
                .then(response => {
                    setdata({
                        name: response.data.name,
                        email: response.data.email,
                        phone: response.data.phone,
                        password: response.data.password
                    });
                    })
                .catch(Err => {
                    console.log(Err)
                })
        }

    }, []); 

    function handleChange(evt) {
        const value = evt.target.value;
        setdata({
            ...data,
            [evt.target.name]: value
        });
    };

    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + useSelector(state => state.token)
        }
    };

    function saveChanges(event) {
        event.preventDefault();
        if (data.name && data.email) {
            axios.post('https://locahost:5000/preferences/', data, config)
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
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- Profile picture card--> */}
                    <div className="card mb-4 mb-2">
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
                <div className="col-lg-12">
                    {/* <!-- Account details card--> */}
                    <div className="card mb-4">
                        <div className="card-header">User Details {data.name}</div>
                        <div className="card-body">
                            <form>
                                {/* <!-- Form Group (username)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                                    <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" name={data.name || ''} defaultValue={data.name || ''} onChange={handleChange} />
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
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name={data.email} defaultValue={data.email || ''} onChange={handleChange} />
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (phone number)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name={data.phone} defaultValue={data.phone || ''} onChange={handleChange} />
                                    </div>
                                    {/* <!-- Form Group (birthday)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                        <input className="form-control" id="inputPassword" type="password" placeholder="Change your password" name={data.password} defaultValue={data.password || ''} onChange={handleChange} />
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