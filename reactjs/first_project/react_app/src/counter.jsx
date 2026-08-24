import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    let hi = () => {
        setCount(count + 1);
    };

    let HI = () => {
        setCount(count - 1);
    };

    let reset = () => {
        setCount(0);
    };

    return (
        <>
            <h2>Counter</h2>

            <h3>{count}</h3>

            <button onClick={hi}>+</button>
            <button onClick={HI}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}


function ChangeText() {
    const [text, setText] = useState("Hello");

    let change = () => {
        setText("Welcome to React");
    };

    return (
        <>
            <h2>Change Text</h2>

            <h3>{text}</h3>

            <button onClick={change}>Change</button>
        </>
    );
}


function CharacterCounter() {
    const [text, setText] = useState("");

    let typing = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h2>Input Character Counter</h2>

            <input
                type="text"
                placeholder="Type something"
                value={text}
                onChange={typing}
            />

            <p>Characters: {text.length}</p>
        </>
    );
}


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let login = () => {
        alert("Login button clicked");
    };

    return (
        <>
            <h2>Login Form</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={login}>Login</button>
        </>
    );
}


function App() {
    return (
        <>
            <Counter />

            <hr />

            <ChangeText />

            <hr />

            <CharacterCounter />

            <hr />

            <LoginForm />
        </>
    );
}

export default App;