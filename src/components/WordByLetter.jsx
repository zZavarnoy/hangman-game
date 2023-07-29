function WordByLetter({ word, letter }) {
    return (
        <div className="word">
            {console.log(word)}
            {word.map((letter, index) => {
                return (
                    <span key={index} id={index} className="word-by-letter">
                        {letter}
                    </span>
                );
            })}
        </div>
    );
}

export default WordByLetter;
