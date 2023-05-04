import * as React from "react";
// import "./Pages.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Cutepop from "./cute_dog-removebg-preview.png";

export const SubmitLink = () => {
  return (
    <>
      <div
        className="flex space-y-6 place-content-center m-4 border-2 rounded-lg bg-blue-300 opacity-80"
        style={{ width: "550px", height: "250px", marginLeft: "400px" }}
      >
        <div>
          <img
            src={Cutepop}
            alt="puppy"
            style={{ width: "90px", height: "150px" }}
          />
        </div>
        <div className="mr-3 font-mono">
          Can't find your Favourite character? <br></br> Would you like your
          story to be featured? <br></br> Submit your story via the link 👉🏽
        </div>
        <Button
          variant="contained"
          href="https://forms.gle/ZuAgfZVfQyVerpAr8"
          target="_blank"
          endIcon={<SendIcon />}
          style={{
            backgroundColor: "rgba(319, 202, 120, 353)",
            marginTop: "80px",
            marginRight: "5px",
            borderRadius: "30px",
            font: "mono",
          }}
          className="hover-rgba(619, 212, 156, 0.345) w-60 h-12 mt-10"
        >
          Submit your story
        </Button>
      </div>
    </>
  );
};
