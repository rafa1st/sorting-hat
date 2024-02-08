import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import sortingHatLogo from "./assets/pictures/sorting-hat-logo.png";
import musicTheme from "./assets/audios/sorting-hat-ceremony.mp3";
import corvinal from "./assets/audios/corvinal.mp3";
import lufalufa from "./assets/audios/lufa-lufa.mp3";
import grifinoria from "./assets/audios/grifinoria.mp3";
import sonserina from "./assets/audios/sonserina.mp3";
import logoHogwarts from "./assets/pictures/hogwarts-logo.png";
import logoGrifinoria from "./assets/pictures/grifinoria-img.png";
import logoSonserina from "./assets/pictures/sonserina-img.png";
import logoCorvinal from "./assets/pictures/corvinal-img.png";
import logoLufaLufa from "./assets/pictures/lufa-lufa-img.png";

import "./App.css";

export default function App() {
  const [picked, setPick] = useState("Escolha a Casa");
  const [logo, setLogo] = useState(logoHogwarts);

  const grifinoriaAnnounce = new Audio(grifinoria);
  const sonserinaAnnounce = new Audio(sonserina);
  const corvinalAnnounce = new Audio(corvinal);
  const lufalufaAnnounce = new Audio(lufalufa);

  const house = [
    {
      name: () => {
        setPick("Grifinória");
      },
      announce: () => {
        grifinoriaAnnounce.play();
      },
      logo: () => {
        setLogo(logoGrifinoria);
      },
    },
    {
      name: () => {
        setPick("Sonserina");
      },
      announce: () => {
        sonserinaAnnounce.play();
      },
      logo: () => {
        setLogo(logoSonserina);
      },
    },
    {
      name: () => {
        setPick("Corvinal");
      },
      announce: () => {
        corvinalAnnounce.play();
      },
      logo: () => {
        setLogo(logoCorvinal);
      },
    },
    {
      name: () => {
        setPick("Lufa-Lufa");
      },
      announce: () => {
        lufalufaAnnounce.play();
      },
      logo: () => {
        setLogo(logoLufaLufa);
      },
    },
  ];

  function houseSort() {
    const sort = Math.floor(Math.random() * 4);
    house[sort].name();
    house[sort].logo();
    house[sort].announce();
  }

  function reset() {
    setPick("Escolha a Casa");
    setLogo(logoHogwarts);
  }

  return (
    <>
      <div>
        <img src={sortingHatLogo} className="logo" alt="Chapéu-Seletor" />
      </div>
      <h1 className="title">Chapéu Seletor</h1>

      <div className="card">
        <div className="house">
          <button
            className="button grifinoria"
            onClick={() => {
              house[0].announce();
              house[0].logo();
              house[0].name();
            }}
          >
            Grifinória
          </button>
          <button
            className="button sonserina"
            onClick={() => {
              house[1].announce();
              house[1].logo();
              house[1].name();
            }}
          >
            Sonserina
          </button>
          <button
            className="button corvinal"
            onClick={() => {
              house[2].announce();
              house[2].logo();
              house[2].name();
            }}
          >
            Corvinal
          </button>
          <button
            className="button lufalufa"
            onClick={() => {
              house[3].announce();
              house[3].logo();
              house[3].name();
            }}
          >
            Lufa-Lufa
          </button>
        </div>
        <button className="button" onClick={houseSort}>
          Aleatório!
        </button>
        <img src={logo} className="logo-house" alt="Logo-Casas" />
        <div className="picked">{picked}</div>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="player">
        <ReactAudioPlayer src={musicTheme} controls loop autoPlay />
      </div>
    </>
  );
}
