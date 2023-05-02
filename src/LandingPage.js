import React from "react";
import { Header } from "./componets/Header";
import { Card } from "./Card";
import { Footer } from "./componets/Footer";
// import  "./index.css";
import "./Pages.css";
import { SubmitLink } from "./SubmitLink";
import PaginationOutlined from "./componets/Utility/Pagenation";

export const LandingPage = (title) => {
  return (
    <>
      <Header />
      <Card />
      <PaginationOutlined />
      <SubmitLink />
      <Footer />
    </>
  );
};
