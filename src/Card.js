import React, { useEffect, useState } from "react";
import "./Pages.css";
import { useNavigate } from 'react-router-dom';
// import axios from "./componets/Utility/axios";
import CharacterBio from "./character.json"
// import { useEffect } from "react";


export const Card = () => {
  const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
  //  const [currentPage, setCurrentPage] = useState(1);
  //  const [postPerPage, setPostPerPage] = useState(6);

  // useEffect(() => {
  //   axios.get("/characters") 
  //     .then(res => console.log(res.data.data))
      // .then(res => setCharacters (res.data.id))
      // .catch(err => console.log(err))
  // },[])

  // const lastPageIndex = currentPage * postPerPage;
  // const firstPageIndex = lastPageIndex - postPerPage;
  // const currentPost =characters.slice(firstPageIndex, lastPageIndex);

  return (
    <>
    {/* <div className="flex flex-wrap flex-col gap-8 justify-center" > */}
    <div className="card-wrapper" >
         { CharacterBio.map(character=>{
            return(
        <div className="cards"
         key={character.id}>
          <div className="card-body" key={character.id}>
              <img src="/images/DisneyQueenHearts.jpeg" alt="image here" />
            <div className="card-title">
              <h2 className="cardd-h">{character.title}</h2>
              <p className="cardd-p"> {character.movie}</p>
              <button className="story-btn"
              onClick={() =>{
                navigate("/story");
              }} 
              >Story</button>
            </div>
          </div>
        </div>
      
            )
          })
        }
         </div>
    </>
  );
};
