import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // IMP ----->
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div style={{border: '2px solid black'}}>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={ (e) => setUsername(e.target.value)}
            placeholder="username" /><br/>
            <input type="text" 
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            placeholder="password" /><br/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;