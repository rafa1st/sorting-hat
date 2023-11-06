import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import useSound from "use-sound";
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

function App() {
  const [picked, setPick] = useState("Escolha a Casa");
  const [logo, setLogo] = useState(logoHogwarts);

  const [playGrifinoria] = useSound(grifinoria);
  const [playSonserina] = useSound(sonserina);
  const [playCorvinal] = useSound(corvinal);
  const [playLufaLufa] = useSound(lufalufa);

  function houseSort() {
    const sort = Math.floor(Math.random() * 4);
    if (sort === 0) {
      setPick("Grifinória");
      setLogo(logoGrifinoria);      
    } else if (sort === 1) {
      setPick("Sonserina");
      setLogo(logoSonserina);
    } else if (sort === 2) {
      setPick("Corvinal");
      setLogo(logoCorvinal);
    } else {
      setPick("Lufa-Lufa");
      setLogo(logoLufaLufa);
    }
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
        <button className="button" onClick={playGrifinoria}>
          Grifinória
        </button>
        <button className="button" onClick={playSonserina}>
          Sonserina
        </button>
        <button className="button" onClick={playCorvinal}>
          Corvinal
        </button>
        <button className="button" onClick={playLufaLufa}>
          Lufa-Lufa
        </button>
        </div>        
        <button className="button" onClick={houseSort}>
          Aleatório!
        </button>
        <img src={logo} className='logo-house' alt="Logo-Casas" />
        <div className="choosed">{picked}</div>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <ReactAudioPlayer src={musicTheme} controls loop autoPlay />
      </div>
    </>
  );
}

export default App;