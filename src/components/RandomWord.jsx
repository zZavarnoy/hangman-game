import words from "../data/words";

function RandomWord() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const id = getRandomInt(words.length);
    return <div className="word">{words[id]}</div>;
}

export default RandomWord;
