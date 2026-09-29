import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

interface Player {
    name: string;
    score: number;
}

interface PlayerProps {
    player: Player;
    increaseScore: () => void;
}

function PlayerDisplay({player, increaseScore}: PlayerProps): React.JSX.Element {
    return (
        <div>
            <p>
                {player.name}: {player.score}
            </p>
            <Button onClick={increaseScore}>Increase Score</Button>
        </div>
    );
}

export default function SolvedScoreboard(): React.JSX.Element {
    const [players, setPlayers] = useState<Player[]>([
        { name: "Alice", score: 10 },
        { name: "Bob", score: 15 },
        { name: "Charlie", score: 8 }
    ]);

    const increaseScore = (playerName: string) => {
        setPlayers(players.map(player =>
            player.name === playerName ? { ...player, score: player.score + 1 } : player
        ));
    }

    return (
        <div>
            <h2>Scoreboard</h2>
            {players.map((player, index) => (
                <PlayerDisplay
                    key={index}
                    player={player}
                    increaseScore={() => {increaseScore(player.name)}}
                />
            ))}
        </div>
    );
}

