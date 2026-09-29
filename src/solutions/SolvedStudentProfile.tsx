import React, { useState } from "react";
import Button from "react-bootstrap/Button";

interface Student {
    name: string;
    major: string;
    year: number;
    honors: boolean;

}

export default function SolvedStudentProfile(): React.JSX.Element {
    const [student, setStudent] = useState<Student>({ name: "John Doe", major: "Finance", year: 3, honors: true });

    return (
        <div>
            <h2>Student Profile</h2>
            <p>Name: {student.name}</p>
            <p>Major: {student.major}</p>
            <p>Year: {student.year}</p>
            <p>Honors: {student.honors ? "Yes" : "No"}</p>
            <p>Use the buttons to fill in my information instead</p>
            <Button
                onClick={() => {
                    setStudent({ ...student, name: "Kevin" });
                }}
            >
                Change Name
            </Button>
            <Button
                onClick={() => {
                    setStudent({ ...student, major: "Computer Science" });
                }}
            >
                Change Major
            </Button>
            <Button
                onClick={() => {
                    setStudent({ ...student, year: 4 });
                }}
            >
                Change Year
            </Button>
            <Button
                onClick={() => {
                    setStudent({ ...student, honors: false });
                }}
            >
                Change Honors
            </Button>
            <Button
                onClick={() => {
                    setStudent({ name: "John Doe", major: "Finance", year: 3, honors: true });
                }}
            >
                Reset
            </Button>
        </div>
    );
}