import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Feed() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            Axios({
                method: "GET",
                url: "https://travelcompanion-q32wjds34a-as.a.run.app/feed",
            }).then((res) => {
                return res.data;
            }).then(data => setData(data))
                .catch(error => console.error(error));
        }
        fetchData();
    }, [])

    return (
        <div>
            <div>
                {data.map(item => {
                    const dateStr = item.createdOn;
                    const date = new Date(dateStr);
                    const formattedDate = date.toLocaleString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: false,
                      timeZone: 'UTC'
                    });
                
                return(
                    <div key={item?._id}>
                        <h4>{item?.author?.username}</h4>
                        <div className="d-flex align-items-start profile-feed-item">
                            <img  alt="profile" className="img-sm rounded-circle" />
                            <div className="ml-4">
                                <h6>
                                {item?.author?.username}
                                    <small className="mx-4 text-muted"><i className="mdi mdi-clock mr-1"></i>{formattedDate}</small>
                                </h6>
                                <p>
                                {item?.body}
                                </p>
                            </div>
                        </div>
                    </div>
                )})}

            </div>
        </div>
    )

}

export default Feed