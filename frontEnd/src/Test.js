import React, { useState } from 'react'

const Test=()=> {
    const[show, setShow]=useState()
  return (
    <div className='bar'>
      
    <div className='dle' id={show ? "hidden":" "}>
    <a  href='#'>Home</a>
    <a  href='#'>About</a>
    <a  href='#'>service</a>
    <a  href='#'>contact</a>
    </div>
    <button className='open' onClick={()=>setShow(!show)}>bula</button>
    <div className='obito'>
  <input type="text"
  placeholder='search'
  />
  <button className='yes'>Press</button>
  </div>
    
  </div>
  )
}

export default Test
