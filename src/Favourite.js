import React from "react";
import { Footer } from "./componets/Footer";
import { Navbar } from "./componets/Navbar";
import { SubmitLink } from "./SubmitLink";

export const Favourite = () => {
  return (
    <>
      <Navbar />
      <div className="favs">
        <h1> YOU DON'T HAVE ANY FAVOURITES YET 😉...</h1>
        <h6>
          <button className="absolute bottom-0 left-0 text-base">
            {" "}
            Pssst... Have you submitted a story yet?
          </button>
        </h6>
      </div>
      <SubmitLink />
      <Footer />
    </>
  );
};
