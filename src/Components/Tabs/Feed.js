import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useSelector } from 'react-redux';

function Feed({ refresh }) {
    const [data, setData] = useState([])
    const token = useSelector(state => state.token);

    useEffect(() => {
        async function fetchData() {
            Axios({
                method: "GET",
                url: "http://localhost:5000/feed",
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {
                return res.data;
            }).then(data => setData(data))
                .catch(error => console.error(error));
        }
        fetchData();
    }, [refresh])

    return (
        <div>
            <div>
                {data.map(item => {
                    const dateStr = item.createdOn;
                    const date = new Date(dateStr);
                    const formattedDate = date.toLocaleString('en-IN', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: true,
                    });
                
                return(
                    <div key={item?._id}>
                        <h4>{item?.author?.username}</h4>
                        <div className="d-flex align-items-start profile-feed-item">
                            <img  alt="profile" src={item?.images} className="img-sm rounded-circle" />
                            <div className="ml-4">
                                <h6>
                                {item?.author?.username}
                                    <small className="text-muted"><i className="mdi mdi-clock mr-1"></i>{formattedDate}</small>
                                </h6>
                                <p>
                                {item?.body}
                                </p>
                                <img  alt="profile" src={item?.images} className="w-75" />
                            </div>
                        </div>
                    </div>
                )})}

            </div>
        </div>
    )

}

export default Feed