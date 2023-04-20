import React from "react";
import { Header } from "./componets/Header";
import { Card } from "./Card";
import { Footer } from "./componets/Footer";
// import  "./index.css";
import "./Pages.css";
import { SubmitLink } from "./SubmitLink";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Card />
     <SubmitLink/>
      <Footer />
    </>
  );
};
