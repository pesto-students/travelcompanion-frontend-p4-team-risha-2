import React, { useState } from 'react';
import Axios from "axios";
import { useSelector } from 'react-redux';

// import "../CSS/Createpost.css"

function CreatePost() {
    const [postBody, setpostBody] = useState("");
    const username = useSelector(state => state.token);
    const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle posting the message and image to the server
  };
    const post = (e) => {
        e.preventDefault();
        debugger;
        Axios({
            method: "POST",
            data: {
                body: postBody,
                images: image,
                author: username,
                createdOn: new Date(),
                likes: [],
            },
            withCredentials: true,
            url: "http://localhost:5000/feed",
        }).then((res) => console.log(res));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="form-control"
                        id="message"
                        value={postBody}
                        onChange={(e) => setpostBody(e.target.value)}
                        rows="4"
                        cols="50"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        className="form-control"
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                </div>
                <button className="btn btn-primary" type="submit" onClick={post}>Post</button>
            </form>
            {/* <form className="post-edit" >
                <input type="text" placeholder="Your Name" required />
                <textarea placeholder="Add your comment here" onChange={(e) => setpostBody(e.target.value)} required />
                <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right" onClick={post}>Add Comment</button>
            </form> */}
            </div>
    )
}

export default CreatePost