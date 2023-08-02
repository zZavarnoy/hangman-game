import { useState } from "react";

function Letter({ letter, searchLetter }) {
    const [disabled, setDisabled] = useState(false);
    const trackingLetterHandler = (e) => {
        const tracking = e.target.innerHTML;
        searchLetter(tracking);
        setDisabled(true);
    };

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
