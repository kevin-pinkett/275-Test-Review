import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EvenOdd from "./EvenOdd";

describe("EvenOdd", () => {
    test("displays the initial numbers", () => {
        render(<EvenOdd />);

        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("4")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("6")).toBeInTheDocument();
    });

    test("removes all even numbers when Remove Evens is clicked", () => {
        render(<EvenOdd />);

        fireEvent.click(
            screen.getByRole("button", {
                name: "Remove Even",
            }),
        );

        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();

        expect(screen.queryByText("2")).not.toBeInTheDocument();
        expect(screen.queryByText("4")).not.toBeInTheDocument();
        expect(screen.queryByText("6")).not.toBeInTheDocument();
    });

    test("removes all odd numbers when Remove Odds is clicked", () => {
        render(<EvenOdd />);

        fireEvent.click(
            screen.getByRole("button", {
                name: "Remove Odd",
            }),
        );

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("4")).toBeInTheDocument();
        expect(screen.getByText("6")).toBeInTheDocument();

        expect(screen.queryByText("1")).not.toBeInTheDocument();
        expect(screen.queryByText("3")).not.toBeInTheDocument();
        expect(screen.queryByText("5")).not.toBeInTheDocument();
    });
});
