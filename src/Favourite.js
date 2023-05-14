import { Button } from "@mui/material";
import React from "react";
import { Footer } from "./componets/Footer";
import { Navbar } from "./componets/Navbar";
import { SubmitLink } from "./SubmitLink";
import "./Pages.css";

export const Favourite = () => {
  return (
    <>
      <Navbar />
      <div className="favs">
        <h1> YOU DON'T HAVE ANY FAVOURITES YET 😉...</h1>
        <h6>
          {/* <button className="relative bottom-0 left-0 text-base"> */}
          {/* {" "} */}
          <Button
            style={{
              backgroundColor: "rgba(312, 202, 120, 0.728)",
              // boxShadow: "0px 0px 5px rgba(219, 302, 186, 0.728)",
              borderRadius: "10px",
            }}
          >
            Pssst... Have you submitted a story yet?
          </Button>

          {/* </button> */}
        </h6>
      </div>
      <SubmitLink style={{ marginTop: 70 }} />
      <Footer />
    </>
  );
};
