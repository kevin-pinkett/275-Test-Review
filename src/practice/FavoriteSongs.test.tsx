import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteSongs from "./FavoriteSongs";

describe("Favorite Songs", () => {
    test("displays three songs initially", () => {
        render(<FavoriteSongs />);

        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(3);
    });

    test("initially has no favorite songs", () => {
        render(<FavoriteSongs />);

        expect(
            screen.queryByRole("button", { name: "Unfavorite" }),
        ).not.toBeInTheDocument();
    });

    test("favoriting a song moves it to Favorite Songs", () => {
        render(<FavoriteSongs />);

        const favoriteButtons = screen.getAllByRole("button", {
            name: "Favorite",
        });

        fireEvent.click(favoriteButtons[0]);

        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(2);

        expect(
            screen.getAllByRole("button", { name: "Unfavorite" }),
        ).toHaveLength(1);
    });

    test("favoriting a song removes it from the Songs section", () => {
        render(<FavoriteSongs />);

        const favoriteButtons = screen.getAllByRole("button", {
            name: "Favorite",
        });

        fireEvent.click(favoriteButtons[0]);

        // Two songs remain available to favorite.
        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(2);

        // One song has been moved to favorites.
        expect(
            screen.getAllByRole("button", { name: "Unfavorite" }),
        ).toHaveLength(1);
    });

    test("unfavoriting a song moves it back to Songs", () => {
        render(<FavoriteSongs />);

        fireEvent.click(screen.getAllByRole("button", { name: "Favorite" })[0]);

        fireEvent.click(screen.getByRole("button", { name: "Unfavorite" }));

        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(3);

        expect(
            screen.queryByRole("button", { name: "Unfavorite" }),
        ).not.toBeInTheDocument();
    });

    test("can favorite multiple songs", () => {
        render(<FavoriteSongs />);

        let favoriteButtons = screen.getAllByRole("button", {
            name: "Favorite",
        });

        fireEvent.click(favoriteButtons[0]);

        // Re-query because the DOM changed after the first click.
        favoriteButtons = screen.getAllByRole("button", {
            name: "Favorite",
        });

        fireEvent.click(favoriteButtons[0]);

        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(1);

        expect(
            screen.getAllByRole("button", { name: "Unfavorite" }),
        ).toHaveLength(2);
    });

    test("can favorite and unfavorite multiple songs", () => {
        render(<FavoriteSongs />);

        let favoriteButtons = screen.getAllByRole("button", {
            name: "Favorite",
        });

        // Favorite two songs.
        fireEvent.click(favoriteButtons[0]);

        favoriteButtons = screen.getAllByRole("button", {
            name: "Favorite",
        });

        fireEvent.click(favoriteButtons[0]);

        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(1);

        expect(
            screen.getAllByRole("button", { name: "Unfavorite" }),
        ).toHaveLength(2);

        // Unfavorite one song.
        fireEvent.click(
            screen.getAllByRole("button", { name: "Unfavorite" })[0],
        );

        expect(
            screen.getAllByRole("button", { name: "Favorite" }),
        ).toHaveLength(2);

        expect(
            screen.getAllByRole("button", { name: "Unfavorite" }),
        ).toHaveLength(1);
    });
});
