import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const token = useSelector(state => state.token);

  useEffect(() => {
    const fetchLikes = async () => {
      const res = await axios.get(`https://travelcompanion-q32wjds34a-as.a.run.app/${postId}/likes`,
        {
          headers: { Authorization: `Bearer ${token}` }
        });
      setLikes(res.data.likes);
      setLiked(res.data.liked);
    };
    fetchLikes();
  }, [postId, token]);

  const handleLike = async () => {
    try {
      axios({
        method: "POST",
        data: {
          postId: postId
        },
        url: `https://travelcompanion-q32wjds34a-as.a.run.app/${postId}/likes`,
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
        url: `https://travelcompanion-q32wjds34a-as.a.run.app/${postId}/likes`,
        headers: { Authorization: `Bearer ${token}` }
      }).then((res) => {
        let len = res.data.length - 1;
        console.log(len, "len")
        if (len >= 0) {
          setLikes(res.data[len].likeNumber);
        } else {
          setLikes(0);
        }

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
