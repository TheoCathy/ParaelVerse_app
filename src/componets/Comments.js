import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export const Comments = () => {
  return (
    <div className="absolute flex">
      <input
        placeholder="leave a comment..."
        type="text"
        className="comment-bar"
        // style={text:#50d71e}
      />
      <button>
        {" "}
        <FontAwesomeIcon icon={faComment} style={{ fontSize: "28px", marginLeft: "8px"  }}/>
      </button>
    </div>
  );
};



