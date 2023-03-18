import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useSelector } from 'react-redux';
import LikeButton from './LikeButton';

function Feed({ refresh }) {
    const [data, setData] = useState([])
    const token = useSelector(state => state.token);

    useEffect(() => {
        async function fetchData() {
            Axios({
                method: "GET",
                url: "https://travelcompanion-q32wjds34a-as.a.run.app/feed",
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {
                return res.data;
            }).then(data => setData(data))
                .catch(error => console.error(error));
        }
        fetchData();
    }, [refresh,token])

    // //handle like click
    // async function like(postID, userID) {
    //     Axios({
    //         method: "POST",
    //         data: {
    //             postID: postID,
    //             userID: userID,
    //         },
    //         url: "https://travelcompanion-q32wjds34a-as.a.run.app/like",
    //         headers: { Authorization: `Bearer ${token}` }
    //     }).then((res) => {
    //         console.log(res)
    //     });
    // }

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

                    return (
                        <div key={item?._id}>
                            <h4>{item?.name}</h4><p></p>
                            <div className="d-flex align-items-start profile-feed-item">
                                <img alt="profile" src={item?.images} className="img-sm rounded-circle" />
                                <div className="ml-4">
                                    <h6>
                                        {item?.author?.username}
                                        <small className="text-muted"><i className="mdi mdi-clock mr-1"></i>{formattedDate}</small>
                                    </h6>
                                    <p>
                                        {item?.body}
                                    </p>
                                    <img alt="profile" src={item?.images} className="w-75" />
                                    <LikeButton postId={item._id} />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}

export default Feed