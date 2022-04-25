import React, {useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";


const App = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const [errorMess, setErrorMess] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
  const user = {Username, Password};
  console.log(user)
  axios({
    method: 'post',
    url: '/login',
    baseURL: 'http://localhost:3001/user',
    data: user
  }).then((res)=>{
    console.log(res.data)
    if(res.data.message == 'Login Successful'){
    setAuthenticated(true)
    setCurrentUser(res.data)
    }else {
    console.log(res.data)
    setErrorMess(res.data.message)
    }
  })
}
const logout = (e) => {
  setUsername('')
  setPassword('')
  setAuthenticated(false)
  setCurrentUser([])
  setErrorMess('')
}


  return(
    <>
    <Navbar/>
    {!authenticated ?
    <section className="main">
      
        <div className="blur">
        <div className="form-container">
        <h2 className="login">Login</h2>
        {errorMess ?
      <div className="error">
        <p>{errorMess}</p>
      </div>
      : " "
      }
        <form className="input-container" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" placeholder="Username" value={Username} onChange={({target}) => setUsername(target.value)}/>
            <label>Password:</label>
            <input type="password" placeholder="Password" value={Password} onChange={({target}) => setPassword(target.value)}/>
            <input id="button" type="submit" value="Login"/>
            <p>Forgot password? <span>Reset Password</span></p>
        </form>
        </div>
        </div>
    </section>
    :
    <>
    <img className="banner" src="https://images.unsplash.com/photo-1483356256511-b48749959172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
    <button className="logout" onClick={logout}>Logout</button>
    <div className="greet">
      <h2>Welcome, {currentUser.user.Name}!</h2>
    </div>
    </>

}
    </>
  )
}



export default App;
