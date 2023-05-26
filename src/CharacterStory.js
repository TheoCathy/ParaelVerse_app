import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./componets/Navbar";
import { Footer } from "./componets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { CharacterBio } from "./character";
import { Comments } from "./componets/Comments";
import { SubmitLink } from "./SubmitLink";
import "./Pages.css";

export const CharacterStory = () => {
  const { characterId } = useParams();
  const selectedCharacterId = parseInt(characterId, 10);

 

  // Find the selected character based on the characterId
  const selectedCharacter = CharacterBio.find(
    (character) => character.id.toString() === characterId
  );


  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onLikeBtnClick = () => {
    setLikes(likes + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="story">
        <Navbar />

        <div className="story-container">
          <span className="story-img">
            <img src={selectedCharacter.image} alt="img here" />
            <h3 className="text-white text-xl font-semibold p-6">
              {" "}
              {selectedCharacter.title}
            </h3>
          </span>
          <>
            <h5 className="main-story">
              {selectedCharacter.story}
              <div className="mr-20px,pr-20px mt-7">
                <button className={isLike ? "red" : ""}>
                  Likes {likes}
                  <FontAwesomeIcon
                    className=""
                    icon={faThumbsUp}
                    style={{ fontSize: "28px", marginLeft: "8px" }}
                    onClick={onLikeBtnClick}
                  />
                </button>

                <button
                  className={`ml-8 position-space justify-around ${
                    isFavorite ? "text-yellow-500" : "text-gray-200"
                  }`}
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
