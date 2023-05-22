import { LandingPage } from "./LandingPage";
// import "./index.css";
import { Router, Routes, Route } from "react-router-dom";
import { Favourite } from "./Favourite";
import { CharacterStory } from "./CharacterStory";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorite" element={<Favourite />} />
        <Route path="/story/:characterId" element={<CharacterStory />} />
      </Routes>
    </>
  );
}

export default App;
