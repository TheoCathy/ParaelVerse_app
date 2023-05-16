import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") {
      return;
    }
    const comment = {
      id: Date.now(),
      text: newComment,
      likes: 0,
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleLikeComment = (id) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="absolute flex 0 m-10 ">
      <form onSubmit={handleCommentSubmit}>
        <input
          placeholder="leave a comment..."
          type="text"
          className="comment-bar"
          value={newComment}
          onChange={handleInputChange}
          style={{ marginLeft: "10px" }}
        />
        <Button classname = "justify" style={{ color: "white" }} type="submit">
          Add
        </Button>
      </form>
      <ul className="absolute">
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleLikeComment(comment.id)}>
              : 👍🏽  {comment.likes}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

{
  /* <button>
        {" "}
        <FontAwesomeIcon
          icon={faComment}
          style={{ fontSize: "28px", marginLeft: "8px", marginTop: "25px" }}
        />
      </button> */
}
