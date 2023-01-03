import React from 'react'
import { ServiceList } from './ServiceList'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Services = () => {
  const [clicks, setClick] = useState(false)
  const handleClickMenu = () => {
    setClick(!clicks)
  }
  return (
    <div>
      <ul className={clicks ? "service-menu clicked" : "service-menu"} onClick={handleClickMenu}>
        {ServiceList.map((index) => {
          return (
            <li key={index.id} className={index.cName}  > <Link to={index.path}
              onClick={() => setClick(false)}>
              {index.title}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}
export default Services
