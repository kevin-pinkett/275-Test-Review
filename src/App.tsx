import React from "react";
import "./App.css";
import EvenOdd from "./solutions/EvenOdd";
import FavoriteSongs from "./solutions/FavoriteSongs";
import StudentProfile from "./solutions/StudentProfile";
import Scoreboard from "./solutions/Scoreboard";
import Button from "react-bootstrap/esm/Button";

function App(): React.JSX.Element {
    const [solutionsVisible, setSolutionsVisible] = React.useState<boolean>(false);

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
            <Button onClick={() => {setSolutionsVisible(!solutionsVisible)}}>
                {solutionsVisible ? "Hide Solutions" : "Show Solutions"}
            </Button>
            {solutionsVisible && (
                <div>
                    <hr />
                    <EvenOdd />
                    <hr />
                    <FavoriteSongs />
                    <hr />
                    <StudentProfile />
                    <hr />
                    <Scoreboard />
                    <hr />
                </div>
            )}
        </div>
    );
}

export default App;
