import React from "react";
import "./App.css";
import EvenOdd from "./solutions/EvenOdd";
import FavoriteSongs from "./solutions/FavoriteSongs";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275 Test Review</header>
            <p>
                Edit the components in <code>src/practice</code> and verify
                output here.
            </p>
            <p>
                Run <code>npm run test</code> to check against the unit tests
            </p>
            <EvenOdd/>
            <FavoriteSongs/>
        </div>
    );
}

export default App;
