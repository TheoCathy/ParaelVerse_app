import React, { useState } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ characters, currentPage, itemsPerPage }) => {
  const navigate = useNavigate();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCharacters = characters.slice(startIndex, endIndex);
  

  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleStoryClick = (characterId) => {
    setSelectedCharacterId(characterId);

    navigate(`/story/${characterId}`);
  };

  return (
    <>
      <div className="card-wrapper">
        {/* {characters.map((character) => { */}
        {displayedCharacters.map((character) => {
          return (
            <div className="cards" key={character.id}>
              <div className="card-body" key={character.id}>
                <img src={character.image} alt="imag here" />
                <div className="card-title">
                  <h2 className="cardd-h">{character.title}</h2>
                  <p className="cardd-p"> {character.movie}</p>
                  <button
                    className="story-btn"
                    onClick={() => handleStoryClick(character.id)}
                  >
                    Story
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
