import React from "react";
import "./App.css";
import SolvedEvenOdd from "./solutions/SolvedEvenOdd";
import SolvedFavoriteSongs from "./solutions/SolvedFavoriteSongs";
import SolvedStudentProfile from "./solutions/SolvedStudentProfile";
import SolvedScoreboard from "./solutions/SolvedScoreboard";
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
                    <SolvedEvenOdd />
                    <hr />
                    <SolvedFavoriteSongs />
                    <hr />
                    <SolvedStudentProfile />
                    <hr />
                    <SolvedScoreboard />
                    <hr />
                </div>
            )}
        </div>
    );
}

export default App;
