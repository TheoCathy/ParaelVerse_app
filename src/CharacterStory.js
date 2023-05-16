import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { Navbar } from "./componets/Navbar";
import { Footer } from "./componets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
// import CharacterBio from "./character.json";
import { Comments } from "./componets/Comments";
import { SubmitLink } from "./SubmitLink";
import "./Pages.css";

export const CharacterStory = () => {
  const [likes, setLikes] = useState(0),
    [isLike, setIsLike] = useState(false),
    onlikebtnclick = () => {
      setLikes(likes + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  const [isFavorite, setIsFavorite] = useState(false);
  // const history = useHistory();
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="story">
        <Navbar />

        <div className="story-container">
          {/* { CharacterBio.map(character=>{
            return(
   */}
          <span className="story-img">
            <img src="/" alt="image here" />
            <h3> Charater </h3>
          </span>
          {/* )},  */}
          <>
            <h5 className="main-story">
              lorem loremLorem ipsum dolor sit amet consectetur. Id tellus massa
              dapibus eu ultrices. Sagittis in posuere amet urna ante velit ac
              et. A faucibus faucibus semper urna odio etiam praesent. Vel enim
              enim suspendisse quis. Lorem ipsum dolor sit amet consectetur. Id
              tellus massa dapibus eu ultrices. Sagittis in posuere amet urna
              Vel enim enim suspendisse quis. Lorem ipsum dolor sit amet
              consectetur. Id tellus massa dapibus eu ultrices. Sagittis in
              posuere amet urna ante velit ac et. A faucibus faucibus semper
              urna odio etiam praesent. Vel enim enim suspendisse quis. lorem
              loremLorem ipsum dolor sit amet consectetur. Id tellus massa
              dapibus eu ultrices. Sagittis in posuere amet urna ante velit ac
              et. A faucibus faucibus semper urna odio etiam praesent. Vel enim
              enim suspendisse quis. Lorem ipsum dolor sit amet consectetur. Id
              tellus massa dapibus eu ultrices. Sagittis in posuere amet urna
              Vel enim enim suspendisse quis. Lorem ipsum dolor sit amet
              consectetur. Id tellus massa dapibus eu ultrices. Sagittis in
              posuere amet urna ante velit ac et. A faucibus faucibus semper
              urna odio etiam praesent. Vel enim enim suspendisse quis. lorem
              loremLorem ipsum dolor sit amet consectetur. Id tellus massa
              dapibus eu ultrices. Sagittis in posuere amet urna ante velit ac
              et. A faucibus faucibus semper urna odio etiam praesent. Vel enim
              enim suspendisse quis. Lorem ipsum dolor sit amet consectetur. Id
              tellus massa dapibus eu ultrices. Sagittis in posuere amet urna
              Vel enim enim suspendisse quis. Lorem ipsum dolor sit amet
              consectetur. Id tellus massa dapibus eu ultrices. Sagittis in
              posuere amet urna ante velit ac et. A faucibus faucibus semper
              urna odio etiam praesent. Vel enim enim suspendisse quis.
              <div className="mr-20px,pr-20px mt-7">
                <button className={"" + (isLike ? "red" : "")}>
                  Likes {likes}
                  <FontAwesomeIcon
                    className=""
                    icon={faThumbsUp}
                    style={{ fontSize: "28px", marginLeft: "8px" }}
                    onClick={onlikebtnclick}
                  />
                </button>

                <button
                  className={`ml-8 position-space justify-around
                ${isFavorite ? "text-yellow-500" : "text-gray-200"}`}
                  onClick={handleFavoriteClick}
                >
                  Favorite
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ fontSize: "28px", marginLeft: "8px" }}
                  />
                </button>
                <Comments />
              </div>
            </h5>
          </>
        </div>
        <SubmitLink />
        <Footer />
      </div>
    </>
  );
};
// export default CharacterStory;
