import React from "react";
import { Navbar } from "./componets/Navbar";
import { Footer } from "./componets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import CharacterBio from "./character.json";

export const CharacterStory = () => {
  return (
    <>
    <div className="story">
      <Navbar />

      <div className="story-container">
        {/* { CharacterBio.map(character=>{
            return(
   */}
      <span className='story-img'>
      <img src= "/" alt="image here" />
      <h3> Charater </h3>
        </span> 
        {/* )},  */}
        <>
          <h5 className="main-story">
            lorem loremLorem ipsum dolor sit amet consectetur. Id tellus massa
            dapibus eu ultrices. Sagittis in posuere amet urna ante velit ac et.
            A faucibus faucibus semper urna odio etiam praesent. Vel enim enim
            suspendisse quis. Lorem ipsum dolor sit amet consectetur. Id tellus
            massa dapibus eu ultrices. Sagittis in posuere amet urna ante velit
            ac et. A faucibus faucibus semper urna odio etiam praesent. Vel enim
            enim suspendisse quis. Lorem ipsum dolor sit amet consectetur. Id
            tellus massa dapibus eu ultrices. Sagittis in posuere amet urna ante
            velit ac et. A faucibus faucibus semper urna odio etiam praesent.
            Vel enim enim suspendisse quis.
            <div className="story-icon">
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <input
              placeholder="leave a comment..."
              type="text"
              className="comment-bar"
            />
          </h5>
             
        </>
      
      </div>
      
      <Footer />
    </div>
    
    </>
  );
};
// export default CharacterStory;
