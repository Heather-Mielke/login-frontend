import React, {useState} from "react";
import axios from "axios";


const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState();


const handleSubmit = (e) => {
    e.preventDefault();
    const user = {username, password};
    axios.post("localhost")
}

  return (
    <>
    <section className="main">
        <div className="blur">
        <div className="form-container">
        <h2 className="login">Login</h2>
        <form className="input-container" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)}/>
            <label>Password:</label>
            <input type="password" placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)}/>
            <input id="button" type="submit" value="Login"/>
            <p>Forgot password? <span>Reset Password</span></p>
        </form>
        </div>
        </div>
    </section>
    </>
  )
}

export default Login