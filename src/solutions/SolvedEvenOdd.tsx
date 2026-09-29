import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function SolvedEvenOdd(): React.JSX.Element {
    const [list, setList] = useState<number[]>([1,2,3,4,5,6]);

    return(
        <div>
            <h2>Even Odd</h2>
            {list.map((num, index) => (
                <p key={index}>{num}</p>
            ))}
            <Button onClick={() => {setList(list.filter(num => num % 2 !== 0))}}>Remove Even</Button>
            <Button onClick={() => {setList(list.filter(num => num % 2 === 0))}}>Remove Odd</Button>
            <Button onClick={() => {setList([1,2,3,4,5,6])}}>Reset</Button>
        </div>
    )
}