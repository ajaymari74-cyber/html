import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let login = () => {
        setMessage("Welcome, " + username);
    };

    return (
        <>
            <h2>Login Form</h2>

            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={login}>Login</button>

            <h3>{message}</h3>
        </>
    );
}

export default LoginForm;