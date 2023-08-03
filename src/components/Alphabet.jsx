import alphabet from "../data/alphabet";
import Letter from "./Letter";

function Alphabet({ searchLetter, correctLetters }) {
    return (
        <div className="alphabet">
            {alphabet.map((letter, index) => {
                return (
                    <Letter
                        key={index}
                        letter={letter}
                        searchLetter={searchLetter}
                        correctLetters={correctLetters}
                    />
                );
            })}
        </div>
    );
}

export default Alphabet;
