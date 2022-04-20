import React from "react";



const login = () => {
  return (
    <>
    <section className="main">
        <div className="blur">
        <div className="form-container">
        <h2 className="login">Login</h2>
        <form className="input-container">
            <label>Username:</label>
            <input type="text" placeholder="Username"/>
            <label>Password:</label>
            <input type="password" placeholder="Password"/>
            <input id="button" type="submit" value="Login"/>
            <p>Forgot password? <span>Reset Password</span></p>
        </form>
        </div>
        </div>
    </section>
    </>
  )
}

export default login