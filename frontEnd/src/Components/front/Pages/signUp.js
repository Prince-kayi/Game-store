import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
const Sign = () => {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState({
    email: "",
    password: ""
  })
  const handleChanger = (e) => {
    const data = { ...details }
    data[e.target.name] = e.target.value
    setDetails(data)
  }
  const [Success, setSms] = useState();
  const SubmitData = (e) => {
    e.preventDefault();
    if (error.email === "" && error.password === "") {
      setError((details) => ({
        ...details,
        email: " Please Enter Email Address",
        password: "Please enter Password"
      }))
      return;
    }
    if (!details.email.includes("@")) {
      setError((details) => ({
        ...details,
        email: "invalid Email Address"
      }))
      return;
    }
    else {
      setError((details) => ({
        ...details,
        email: " "
      }))
    }
    if (!details.password.includes("@")) {
      setError((details) => ({
        ...details,
        password: "Password doesnt match"
      }))
      return;
    }
    else {
      setError((details) => ({
        ...details,
        password: " "
      }))
      return setSms("You have successfully logged in");
    }
  }
  const showResults = async () => {
     const Logged={
      email:details.email,
      password:details.password
     }

     axios.post("http://localhost:2000/pie/signin",Logged)
     .then(res=>console.log(res.data))
     setDetails({
      email: "",
      password: ""
     })
  }
  return (
    <div className='sign-wrap'>
      <div className='sWrap'>
        <form className='logForm' onSubmit={SubmitData}>
          {Success && <div className='succed'>{Success}</div>}
          <h1 className='in'>Sign In</h1>
          <label>    Email:  </label>
          <div className='sing-in'>
            <input type="text"
              name='email'
              placeholder='enter email address'
              value={details.email}
              onChange={handleChanger}
            />
          </div>
          {!!error.email && <div className='messageError'>{error.email}</div>}
          <label> Password: </label>
          <a href="/forgotPass" className="fogot">Forgot password?</a>
          <div className='sing-in'>
            <input type="password"
              name='password'
              placeholder='enter password'
              value={details.password}
              onChange={handleChanger}
            />
          </div>
          {!!error.password && <div className='messageError'>{error.password}</div>}
          <div className='login'>
            <button className='login-btn' onClick={showResults}>
              <span className='circle'>
                <span className='icon arrow'></span>
              </span>
              <span className='texts' >Login</span>
            </button>
            <p>New to PayAlot ? <a href="/register"> Create account</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Sign
