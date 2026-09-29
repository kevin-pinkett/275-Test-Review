import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Scoreboard from "./Scoreboard";

describe("Scoreboard", () => {
    test("displays all initial players and scores", () => {
        render(<Scoreboard />);

        expect(screen.getByText("Alice: 10")).toBeInTheDocument();
        expect(screen.getByText("Bob: 15")).toBeInTheDocument();
        expect(screen.getByText("Charlie: 8")).toBeInTheDocument();
    });

    test("renders one button for each player", () => {
        render(<Scoreboard />);

        const buttons = screen.getAllByRole("button");

        expect(buttons).toHaveLength(3);
    });

    test("increases Alice's score when Alice's button is clicked", () => {
        render(<Scoreboard />);

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[0]);

        expect(screen.getByText("Alice: 11")).toBeInTheDocument();
        expect(screen.getByText("Bob: 15")).toBeInTheDocument();
        expect(screen.getByText("Charlie: 8")).toBeInTheDocument();
    });

    test("increases Bob's score when Bob's button is clicked", () => {
        render(<Scoreboard />);

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[1]);

        expect(screen.getByText("Alice: 10")).toBeInTheDocument();
        expect(screen.getByText("Bob: 16")).toBeInTheDocument();
        expect(screen.getByText("Charlie: 8")).toBeInTheDocument();
    });

    test("increases Charlie's score when Charlie's button is clicked", () => {
        render(<Scoreboard />);

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[2]);

        expect(screen.getByText("Alice: 10")).toBeInTheDocument();
        expect(screen.getByText("Bob: 15")).toBeInTheDocument();
        expect(screen.getByText("Charlie: 9")).toBeInTheDocument();
    });

    test("only changes the selected player's score", () => {
        render(<Scoreboard />);

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[0]);

        expect(screen.getByText("Alice: 12")).toBeInTheDocument();

        expect(screen.getByText("Bob: 15")).toBeInTheDocument();
        expect(screen.getByText("Charlie: 8")).toBeInTheDocument();
    });
});
