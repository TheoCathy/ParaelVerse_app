import React, { useState } from "react";
import { Header } from "./componets/Header";
// import { Card } from "./Card";
import { Footer } from "./componets/Footer";
// import  "./index.css";
import { CharacterBio } from "./character";
import "./Pages.css";
import { SubmitLink } from "./SubmitLink";
// import PaginationOutlined from "./componets/Utility/Pagenation";

export const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of cards to display per page
  const totalCards = CharacterBio.length; // Total number of cards
  const totalPages = Math.ceil(totalCards / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Logic to determine the range of cards to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = CharacterBio.slice(startIndex, endIndex);

  return (
    <>
      <Header characters={displayedCards} />

      <SubmitLink />
      <Footer />
    </>
  );
};
