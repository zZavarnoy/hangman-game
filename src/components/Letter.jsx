function Letter({ letter }) {
    const trackingLetterHandler = (e) => {
        const tracking = e.target.innerHTML;
        console.log(tracking);
    };

    return (
        <span className="letter" onClick={trackingLetterHandler}>
            {letter}
        </span>
    );
}

export default Letter;
