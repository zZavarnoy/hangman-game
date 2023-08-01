import alphabet from "../data/alphabet";
import Letter from "./Letter";

function Alphabet({ searchLetter }) {
    return (
        <div className="alphabet">
            {alphabet.map((letter, index) => {
                return (
                    <Letter
                        key={index}
                        letter={letter}
                        searchLetter={searchLetter}
                    />
                );
            })}
        </div>
    );
}

export default Alphabet;
