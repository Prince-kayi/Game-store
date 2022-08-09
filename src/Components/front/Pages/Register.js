import React, { useState } from 'react'
import "./Register.css"
const Register = () => {
  const [regData, setRegdata] = useState({
    firstName: " ",
    lastName: " ",
    Cnumber: " ",
    password: " ",
    email: " ",
    reEnter: " "
  })
  const [errors, setErrors] = useState({
    firstName: " ",
    lastName: " ",
    Cnumber: " ",
    password: " ",
    email: " ",
    reEnter: " "
  })
  const MakeChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegdata((regData) => ({
      ...regData,
      [name]: type === "checkbox" ? checked : value
    }))
  }
  const Submits = (e) => {
    e.preventDefault();
    if (regData.firstName === "" || regData.firstName === "" || regData.email === "" || regData.password ==="") {
      setErrors((regData) => ({
        ...regData,
        firstName: "Please Enter First Name ",
        lastName: "Please Enter First Name ",
        email: " Please Enter Email address",
        password: "Please Enter Password"
      }))
      return;
    }
    else {
      setErrors((regData) => ({
        ...regData,
        firstName: " ",
        lastName: " "
      }))
    }
    if (!regData.email.includes("@")) {
      setErrors((regData) => ({
        ...regData,
        email: " Invalid Email"
      }))
    }
    else {
      setErrors((regData) => ({
        ...regData,
        email: " "
      }))
    }
    if (regData.password.length < 6) {
      setErrors((regData) => ({
        ...regData,
        password: " Password is too short"
      }))
    }
    else {
      setErrors((regData) => ({
        ...regData,
        password: " "
      }))
    }
  }
  const Results = () => {
    console.log("regData", regData)
  }
  return (
    <div className='reGister'>
      <div className='Rwrap'>
        <div className='info'>
          <h1 className='up'>Sign Up</h1>
          <p className='si'>Sign up with us to get access to your Orders,Wishlist and Recommendtions!</p></div>
        <form className='RegForm' onSubmit={Submits}>
          <select className='title'>
            <option>Title</option>
            <option value="mr">Mr</option>
            <option value="mrs.">Mrs.</option>
            <option value="ms.">Ms.</option>
            <option value="miss">Miss</option>
            <option value="mx">Mx</option>
          </select>
          <div className='star'>
            <input type="text"
                name='firstName'
              placeholder='First Name *'
              value={regData.firstName}
              onChange={MakeChange}
            
            />
            {!!errors.firstName && <div className='Messagerror'>{errors.firstName}</div>}
            <div className='star'>
              <input type="text"
                name='Cnumber'
                placeholder='Cellphone number *'
                value={regData.Cnumber}
                onChange={MakeChange}
              />
            </div>
            {!!errors.Cnumber && <div className='Messagerror'>{errors.Cnumber}</div>}
            <div className='star'>
              <input type="text"
                placeholder='Enter password *'
                name='password'
                onChange={MakeChange}
                value={regData.password}
              />
            </div>
            {!!errors.password && <div className='Messagerror'>{errors.password}</div>}
          </div>
          <div className='left-in'>
            <div>
              <input type="text"
                placeholder='Last Name*'
                name='lastName'
                onChange={MakeChange}
                value={regData.lastName}
              />
            </div>
            {!!errors.lastName && <div className='Messagerror'>{errors.lastName}</div>}
            <div>
              <input type="text"
                placeholder='Email address*'
                name='email'
                onChange={MakeChange}
                value={regData.email}
              />
            </div>
            {!!errors.email && <div className='Messagerror'>{errors.email}</div>}
            <div>
              <input type="text"
                placeholder='Re-enter password*'
                name='reEnter'
                onChange={MakeChange}
                value={regData.reEnter}
              />
            </div>
          </div>
        </form>
        <div className='box'>
          <input type="checkbox"
            name='agree'
          />
          <span className='agree'>Agree to recieve marketing communications</span>
          <input type="checkbox"
            name='agree' />
          <span className='agree'>Agree with <a href='/conditions'>Terms & Conditions</a>
            &nbsp; and <a href='policy'>Privacy Policy</a></span>
        </div>
        <button className="sin-up" onClick={Results}>Sign Up</button> 
       
      </div>
    </div>
  )
}
export default Register
