import React, { useEffect, useState } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
// import axios from "./componets/Utility/axios";
import { CharacterBio } from "./character";
import axios from "axios";

export const Card = ({characters}) => {
  const navigate = useNavigate();

  // const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleStoryClick = (characterId) => {
    setSelectedCharacterId(characterId);
    // navigate("/story");
    navigate(`/story/${characterId}`);
  };
  // const selectedCharacter = characters.find((character) => character.id === selectedCharacterId);

  return (
    <>
      <div className="card-wrapper">
        {characters.map((character) => {
          return (
            <div className="cards" key={character.id}>
              <div className="card-body" key={character.id}>
                <img src={character.image} alt="image here" />
                <div className="card-title">
                  <h2 className="cardd-h">{character.title}</h2>
                  <p className="cardd-p"> {character.movie}</p>
                  <button
                    className="story-btn"
                    // onClick={() => {
                    //   navigate("/story");
                    // }}
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
