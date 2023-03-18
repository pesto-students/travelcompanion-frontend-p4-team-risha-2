import React, { useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditProfile() {
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
    const dispatch = useDispatch();

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
            axios.get(`https://travelcompanion-q32wjds34a-as.a.run.app/preferences/${id}`,)
                .then(response => {
                    setdata({
                        name: response.data.name,
                        email: response.data.email,
                        phone: response.data.phone,
                        password: response.data.password
                    });
                    dispatch({
                        type: 'SET_TOKEN',
                        payload: {
                            name: response.data.name,
                            email: response.data.email,
                        }
                    })
                })
                .catch(Err => {
                    console.log(Err)
                })
        }

    }, [id,dispatch]);

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
                            <img className="img-account-profile rounded-circle mb-2" src="https://firebasestorage.googleapis.com/v0/b/travelcompanion-374605.appspot.com/o/images%2Fdownload.jfif?alt=media&token=39c29a3f-073d-4dfd-b853-a793ea83b803" alt="" />
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
                                <button className="btn btn-primary" type="button" onClick={saveChanges}>Save changes {notify}12</button>
                                { notify ? <ToastContainer position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored" /> : ''}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile