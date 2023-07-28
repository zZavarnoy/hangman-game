import alphabet from "../data/alphabet";
import Letter from "./Letter";

function Alphabet() {
    return (
        <div className="alphabet">
            {alphabet.map((letter, index) => {
                return <Letter key={index} letter={letter} />;
            })}
        </div>
    );
}

export default Alphabet;
