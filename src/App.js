import "./App.css";
import Alphabet from "./components/Alphabet";
import RandomWord from "./components/RandomWord";

function App() {
    return (
        <div className="App">
            <h1>Gallows Game</h1>
            <RandomWord />
            <Alphabet />
        </div>
    );
}

export default App;
