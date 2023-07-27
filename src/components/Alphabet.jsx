import alphabet from "../data/alphabet";
import Letter from "./Letter";

function Alphabet() {
    return (
        <div className="alphabet">
            {alphabet.map((letter) => {
                return <Letter key={letter} letter={letter} />;
            })}
        </div>
    );
}

export default Alphabet;
