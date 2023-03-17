import React, { useState } from 'react';
import Axios from "axios";
import { useSelector } from 'react-redux';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../utilities/Loader/Loader';
import { useNavigate } from 'react-router-dom';


// import "../CSS/Createpost.css"

function CreatePost({ refresh, setRefresh }) {
    const [postBody, setpostBody] = useState("");
    const token = useSelector(state => state.token);
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const author = useSelector(state => state);


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

        if (!postBody || !image) {
            errors.loginEmail = 'Error';
        }
        return errors;
    }

    /**
     * Funtion to handle Upload Image to firebase.
     */
    const handleUpload = () => {
        // setProgressShow(true);
        setIsLoading(true);
        const fileName = image.name;
        const storageRef = ref(
            storage,
            `/images/${fileName}`
        );
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                 Math.floor(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // setProgress(uploaded);
            },
            (error) => {
                if (error.response.status === 401) {
                    // unauthorized, redirect to login page
                    navigate('/');
                  } else{
                    console.log(error);
                    setIsLoading(false);
                  }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrl(url);
                });
                setIsLoading(false);
            }
        );
    };
    const post = (e) => {
        e.preventDefault();
        const errors = validateForm();
        
        if(Object.keys(errors).length === 0){
            setIsLoading(true);
            Axios({
                method: "POST",
                data: {
                    body: postBody,
                    images: url,
                    createdOn: new Date(),
                    likes: [],
                    name: "assam"
                },
                url: "http://localhost:5000/feed",
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {
                setRefresh(!refresh);
                setIsLoading(false);
                setUrl("");
                setpostBody("");
            });
        }else{
            errorDisplay("Please write a message and Upload a Image to create a Post");
            setIsLoading(false);
        }
        
    };

    return (
        isLoading ?
            <Loader /> :
        <div>
            <form >
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="form-control mt-2"
                        id="message"
                        value={postBody}
                        onChange={(e) => setpostBody(e.target.value)}
                        rows="4"
                        cols="50"
                    />
                </div>
                <div className="form-group d-flex align-items-center">
                    <label htmlFor="image">Image:</label>
                    <br />
                    <input
                        className="form-control w-75 mx-2"
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                    <button className="btn btn-primary mx-2 bg-light text-dark border-dark" onClick={handleUpload}>
                        Upload
                    </button>
                </div>
                {url.length === 0 ? "" : <small >Image Uploaded Succesfuuly</small>}
                <br />
                <button  className="btn btn-primary bg-light text-success border-success my-2" type="submit" onClick={post}>Post</button>
            </form>

            {errorDisplay ? <ToastContainer /> : ""}

        </div>
    )
}

export default CreatePost