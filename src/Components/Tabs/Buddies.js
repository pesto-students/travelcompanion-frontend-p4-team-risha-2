import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { useSelector } from 'react-redux';

function Buddies() {
    const [data, setData] = useState([])
    const token = useSelector(state => state.token);

    useEffect(() => {
        async function fetchData() {
            Axios({
                method: "GET",
                url: "http://localhost:5000/preferences",
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {
                return res.data;
            }).then(data => {
                setData(data)
                console.log(data)
            })
                .catch(error => console.error(error));
        }
        fetchData();
    }, [])
    return (
        <div>
            <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
            <label htmlFor="tab-2" className="tab-label my-2">Find Buddies</label>
            <div className="tab-content h-auto">
                <div className="container profile-page">
                    <div className="row">
                    {data.map(item => {
                        return (
                        <div className="col-12" key={item._id}>
                            <div className="card profile-header">
                                <div className="body">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="profile-image float-md-right"> <img src="https://firebasestorage.googleapis.com/v0/b/travelcompanion-374605.appspot.com/o/images%2Fdownload.jfif?alt=media&token=39c29a3f-073d-4dfd-b853-a793ea83b803" alt="" /> </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-12">
                                            <h4 className="m-t-0 m-b-0"><strong>{item.name}</strong></h4>
                                            <span className="job_post">{item.email}</span>
                                            <p>{item.phone}</p>
                                            <div>
                                                <button className="btn btn-primary btn-round mx-2">Follow</button>
                                                <button className="btn btn-primary btn-round btn-simple">Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buddies