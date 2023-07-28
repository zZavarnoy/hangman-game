import "./App.css";
import { useState } from "react";
import words from "./data/words";
import Alphabet from "./components/Alphabet";
import RandomWord from "./components/RandomWord";

function App() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const id = getRandomInt(words.length);
    const newWord = words[id];

    const [word, setWord] = useState(newWord);

    return (
        <div className="App">
            <h1>Gallows Game</h1>
            <div className="img-box"></div>
            <RandomWord word={word} />
            <button>Get new word</button>
            <Alphabet />
        </div>
    );
}

export default App;
