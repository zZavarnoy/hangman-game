function WordByLetter({ word, correctLetters }) {
    return (
        <div className="word">
            {word.map((letter, index) => {
                return (
                    <span key={index} className="word-by-letter">
                        {correctLetters.includes(letter) ? letter : "_"}
                    </span>
                );
            })}
        </div>
    );
}

export default WordByLetter;
