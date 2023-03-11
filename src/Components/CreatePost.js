import React, { useState } from 'react';
import Axios from "axios";
import { useSelector } from 'react-redux';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import storage from '../firebase';


// import "../CSS/Createpost.css"

function CreatePost() {
    const [postBody, setpostBody] = useState("");
    const token = useSelector(state => state.token);
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");


    /**
     * Function to handle Submit post
     * Code to handle posting the message and image URL to the db
     *  */ 
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    /**
     * Funtion to handle Upload Image to firebase.
     */
    const handleUpload = () => {
		// setProgressShow(true);
		const fileName = new Date().getTime() + image.name;
		const storageRef = ref(
			storage,
			`/images/${fileName}`
		);
		const uploadTask = uploadBytesResumable(storageRef, image.value);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploaded = Math.floor(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
                console.log(uploaded)
				// setProgress(uploaded);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrl(url);
                    console.log("url",url)
				});
			}
		);
	};
    const post = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
                body: postBody,
                images: url,
                createdOn: new Date(),
                likes: [],
            },
            url: "http://localhost:5000/feed",
            headers: { Authorization: `Bearer ${token}` }
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
                    <button onClick={handleUpload}>
					Upload
				</button>
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