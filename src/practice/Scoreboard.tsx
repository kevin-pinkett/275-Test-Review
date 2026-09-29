import React from "react";

/**
 * Score Board (This one's tricky!)
 * 
 * Define a component named ScoreBoard. Its state should be an array
 * of player objects.
 * 
 * Each player object should have:
 * 
 * - name: string,
 * - score: number
 * 
 * Initially, the state should contain:
 * 
 *     Alice - 10
 *     Bob - 15
 *     Charlie - 8
 * 
 * The ScoreBoard component should display each player's name and
 * current score.
 * 
 * For each player, display a separate PlayerDisplay component.
 * 
 * PlayerDisplay should receive the player through props.
 * 
 * Each PlayerDisplay should contain a button to increase the player's score by 1.
 * 
 * For example, if Alice's button is clicked twice:
 * 
 *  Alice: 10  ->  Alice: 12
 *  Bob:   15  ->  Bob:   15
 *  Charlie: 8  ->  Charlie: 8
 *
 * Only Alice's score should change.
 *
 * Requirements:
 *  1. Player information must be stored using useState.
 *  2. State must be an array of objects.
 *  3. ScoreBoard should render PlayerDisplay for each player.
 *  4. PlayerDisplay should receive the player through props.
 *  5. The state setter, or an appropriate callback that uses
 *     the setter, must also be passed through props.
 *  6. Clicking +1 should update only the selected player's score.
 *  7. Do not directly modify the existing state array or player object.
 * 
 * Hint:
 *     map is useful for creating a new array while changing
 *     one particular player's object.
 */

function PlayerDisplay(): React.JSX.Element {
    return (
        <div>
            {/* Display the player's name and score */}
        </div>
    );
}

export default function Scoreboard(): React.JSX.Element {
    
    return (
        <div>
            <h2>Scoreboard</h2>
            {/* Render PlayerDisplay for each player */}
            <PlayerDisplay/>
        </div>
    );
}

