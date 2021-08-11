import { useState } from "react";
import { Gif } from "@giphy/react-components";
import SearchExperience from './components/SearchExperience';
import './App.css';

function App() {
  const [modalGif, setModalGif] = useState();
  return (
    <>
      <h4 className="title">Cool Gifs App! 🔍👾</h4>
      <p className="description">An easy app made with ReactJS + GIPHY SDK for Web 🚀📲</p>
      <div className="links">
        <a href="/">github</a>
        <span> - </span>
        <a href="/">pedroagont.com</a>
      </div>
      <SearchExperience
          onGifClick={(gif, e) => {
          console.log("gif", gif);
          e.preventDefault();
          setModalGif(gif);
        }}
      />
      {modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)"
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          <Gif gif={modalGif} width={200} />
        </div>
      )}
    </>
  )
}

export default App;
