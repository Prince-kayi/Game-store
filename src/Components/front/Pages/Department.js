import React, { useState } from 'react'
import { DepartList } from './DepartList'
import { Link } from 'react-router-dom'
import "./services.css"
const Department = () => {
const [click,setClick]=useState(false)
const handleClick =()=>{
    setClick(!click)
}
  return (
    <div>
        <ul className={click ?"show-menu active":"show-menu"}  onClick={handleClick}>
            {DepartList.map((indexs)=>{
                return(
                    <li key={indexs.id}>
                    <Link to={indexs.path}className={indexs.cName}> 
                    {indexs.title} &nbsp;&nbsp;&nbsp;
                    {indexs.icon}
                    </Link>
                    </li>
                )
            })}
        </ul>
      
    </div>
  )
}
export default Department
