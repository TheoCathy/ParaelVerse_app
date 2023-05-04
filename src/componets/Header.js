import React, { useState } from "react";
import { Navbar } from "./Navbar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CharacterStory } from "../CharacterStory";
import { CharacterBio } from "../character";

export const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="search-Sec">
          <input
            className="searchBar"
            placeholder="search Name..."
            type="text"
          />
          <div className="search-icon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              // onClick={}
            />
          </div>
        </div>
        <div className="Intro">
          <h3 className="Intro-h">
            A parallel Disney universe where the villains win
          </h3>
        </div>
        <div className="Intro-p">
          <p>what if we lived their own side of the story...</p>
        </div>
      </div>
    </>
  );
};
