import React, { useState } from "react";
import { Navbar } from "./Navbar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CharacterBio } from "../character";
import { Card } from "../Card";
import PaginationOutlined from "./Utility/Pagenation";



export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = CharacterBio.filter((character) =>
      character.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };
  const itemsPerPage = 10; // Number of cards to display per page
  const totalCards = CharacterBio.length; // Total number of cards
  const totalPages = Math.ceil(totalCards / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="search-Sec">
          <input
            className="searchBar"
            placeholder="Search Name..."
            type="text"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="Intro">
          <h3 className="Intro-h">
            A parallel Disney universe where the villains win
          </h3>
        </div>
        <div className="Intro-p">
          <p>What if we lived their own side of the story...</p>
        </div>
      </div>
      <Card
        characters={
          filteredCharacters.length > 0 ? filteredCharacters : CharacterBio
        }
        
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <PaginationOutlined
        totalPages={totalPages}
        activePage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
