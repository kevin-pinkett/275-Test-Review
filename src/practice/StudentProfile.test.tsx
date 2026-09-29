import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StudentProfile from "./StudentProfile";

describe("Student Profile", () => {
    test("displays student information", () => {
        render(<StudentProfile />);

        expect(screen.getByText(/^Name:/)).toBeInTheDocument();
        expect(screen.getByText(/^Major:/)).toBeInTheDocument();
        expect(screen.getByText(/^Year:/)).toBeInTheDocument();
        expect(screen.getByText(/^Honors:/)).toBeInTheDocument();
    });

    test("has a button for each student property", () => {
        render(<StudentProfile />);

        expect(screen.getAllByRole("button")).toHaveLength(5);
    });

    test("Change Name changes the displayed name", () => {
        render(<StudentProfile />);

        const nameBefore = screen.getByText(/^Name:/).textContent;

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[0]);

        const nameAfter = screen.getByText(/^Name:/).textContent;

        expect(nameAfter).not.toBe(nameBefore);
    });

    test("Change Major changes the displayed major", () => {
        render(<StudentProfile />);

        const majorBefore = screen.getByText(/^Major:/).textContent;

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[1]);

        const majorAfter = screen.getByText(/^Major:/).textContent;

        expect(majorAfter).not.toBe(majorBefore);
    });

    test("Change Year changes the displayed year", () => {
        render(<StudentProfile />);

        const yearBefore = screen.getByText(/^Year:/).textContent;

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[2]);

        const yearAfter = screen.getByText(/^Year:/).textContent;

        expect(yearAfter).not.toBe(yearBefore);
    });

    test("Change Honors changes the displayed honors status", () => {
        render(<StudentProfile />);

        const honorsBefore = screen.getByText(/^Honors:/).textContent;

        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[3]);

        const honorsAfter = screen.getByText(/^Honors:/).textContent;

        expect(honorsAfter).not.toBe(honorsBefore);
    });

    test("Reset restores the original student information", () => {
        render(<StudentProfile />);

        const nameBefore = screen.getByText(/^Name:/).textContent;
        const majorBefore = screen.getByText(/^Major:/).textContent;
        const yearBefore = screen.getByText(/^Year:/).textContent;
        const honorsBefore = screen.getByText(/^Honors:/).textContent;

        const buttons = screen.getAllByRole("button");

        // Change all four properties.
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        fireEvent.click(buttons[2]);
        fireEvent.click(buttons[3]);

        // Reset.
        fireEvent.click(buttons[4]);

        expect(screen.getByText(/^Name:/).textContent).toBe(nameBefore);
        expect(screen.getByText(/^Major:/).textContent).toBe(majorBefore);
        expect(screen.getByText(/^Year:/).textContent).toBe(yearBefore);
        expect(screen.getByText(/^Honors:/).textContent).toBe(honorsBefore);
    });

    test("changing one property preserves the other properties", () => {
        render(<StudentProfile />);

        const majorBefore = screen.getByText(/^Major:/).textContent;
        const yearBefore = screen.getByText(/^Year:/).textContent;
        const honorsBefore = screen.getByText(/^Honors:/).textContent;

        const buttons = screen.getAllByRole("button");

        // Change only the name.
        fireEvent.click(buttons[0]);

        expect(screen.getByText(/^Major:/).textContent).toBe(majorBefore);
        expect(screen.getByText(/^Year:/).textContent).toBe(yearBefore);
        expect(screen.getByText(/^Honors:/).textContent).toBe(honorsBefore);
    });
});
