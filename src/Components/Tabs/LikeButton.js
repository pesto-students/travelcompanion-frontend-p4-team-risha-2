import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const token = useSelector(state => state.token);

  useEffect(() => {
    const fetchLikes = async () => {
      const res = await axios.get(`http://localhost:5000/${postId}/likes`,
      {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLikes(res.data.likes);
      setLiked(res.data.liked);
    };
    fetchLikes();
  }, [postId,token]);

  const handleLike = async () => {
    try {
      axios({
        method: "POST",
        data: {
          postId: postId
        },
        url: `http://localhost:5000/${postId}/likes`,
        headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      setLikes(res.data.likes);
      setLiked(true);
    });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlike = async () => {
    try {
      // const res = await axios.delete(`/api/posts/${postId}/likes`,{
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // setLikes(res.data.likes);
      // setLiked(false);
      axios({
        method: "DELETE",
        data: {
          postId: postId
        },
        url: `http://localhost:5000/${postId}/likes`,
        headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      setLikes(res.data.likes);
      setLiked(false);
    });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={liked ? handleUnlike : handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      {likes} likes
    </div>
  );
};

export default LikeButton
