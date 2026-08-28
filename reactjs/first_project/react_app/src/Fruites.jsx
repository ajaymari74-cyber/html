import React, { useState } from "react";

const Fruites = () => {
    const [fruites, setFruites] = useState([
        "Apple",
        "Mango",
        "Orange",
        "Pineapple"
    ]);

    const [fruiteName, setFruiteName] = useState("");

    function add() {
        if (fruiteName.trim() !== "") {
            setFruites([...fruites, fruiteName]);
            setFruiteName("");
        }
    }

    return (
        <div>
            <ul>
                {fruites.map((fruite, index) => (
                    <li key={index}>
                        <h1>{fruite}</h1>
                    </li>
                ))}
            </ul>

            <label>Enter</label>

            <input
                type="text"
                placeholder="Enter the fruit name"
                value={fruiteName}
                onChange={(e) => setFruiteName(e.target.value)}
            />

            <input
                type="button"
                value="Add"
                onClick={add}
            />
        </div>
    );
};

export default Fruites;

