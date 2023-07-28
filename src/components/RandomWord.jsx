function RandomWord({ word }) {
    return (
        <div className="word">
            {console.log(word)}
            {word.split("").map((letter, index) => {
                return (
                    <span key={index} className="word-by-letter">
                        {letter}
                    </span>
                );
            })}
        </div>
    );
}

export default RandomWord;
