import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export default function FavoriteSongs(): React.JSX.Element {
    const [songs, setSongs] = useState<string[]>(["Survival Tactics: Joey Bada$$", "peter pan.: Brent Faiyaz", "Distant Lover: Marvin Gaye"]);
    const [favoriteSongs, setFavoriteSongs] = useState<string[]>([]);
 
    /**
     * 
     * You can ignore the styling of this component. You are only being assessed on
     * the functionality of the component. The styling is only to make it easier to
     * visualize what's happening.
     * 
     */
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>Favorite Songs</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <div>
                    <p>Songs: </p>
                    {songs.map((song, index) => (
                        <div key={index}>
                            <p>{song}</p>
                            <Button
                                onClick={() => {
                                    setFavoriteSongs([...favoriteSongs, song]);
                                    setSongs(songs.filter((s) => s !== song));
                                }}
                            >
                                Favorite
                            </Button>
                        </div>
                    ))}
                </div>
                <div>
                    <p>Favorite Songs: </p>
                    {favoriteSongs.map((song, index) => (
                        <div key={index}>
                            <p>{song}</p>
                            <Button
                                onClick={() => {
                                    setSongs([...songs, song]);
                                    setFavoriteSongs(
                                        favoriteSongs.filter((s) => s !== song),
                                    );
                                }}
                            >
                                Unfavorite
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}