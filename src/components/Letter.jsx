import { useState, useEffect } from "react";

function Letter({ letter, searchLetter, correctLetters }) {
    const [disabled, setDisabled] = useState(false);
    const trackingLetterHandler = (e) => {
        const tracking = e.target.innerHTML;
        searchLetter(tracking);
        setDisabled(true);
    };
    useEffect(() => {
        if (correctLetters.length === 0) {
            setDisabled(false);
        }
    }, [correctLetters]);

    return (
        <button
            className="letter"
            onClick={trackingLetterHandler}
            disabled={disabled}
        >
            {letter}
        </button>
    );
}

export default Letter;
