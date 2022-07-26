import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"
import Services from '../Components/front/Pages/Services'
import Department from '../Components/front/Pages/Department'

const Header = ({ cartItem }) => {
    const[showLinks,setShowLinks]=useState(false)
    const [Sdrop, setDrop] = useState(false)
    const [Ddrop, setdrop] = useState(false)
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDrop(false)
        }
        else {
            setDrop(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDrop(false)
        }
        else {
            setDrop(false)
        }
    }
    const onMouseEnters = () => {
        if (window.innerWidth < 960) {
            setdrop(false)
        }
        else {
            setdrop(true)
        }
    }
    const onMouseLeaves = () => {
        if (window.innerWidth < 960) {
            setdrop(false)
        }
        else {
            setdrop(false)
        }
    }
    return (
        <header className='nav-head'>
            <button className='tap' onClick={()=>setShowLinks(!showLinks)}><i class="fas fa-bars" /></button>
            <div className='nav-logo'>
                <h1>
                    <Link to="/" className='logo'>SaveAlot</Link>
                </h1>
                <div className='depart'
                    onMouseEnter={onMouseEnters}
                    onMouseLeave={onMouseLeaves}
                >
                    <Link to="/browse">Browser Department&nbsp;&nbsp;<i class="fas fa-angle-down" /></Link>
                    {Ddrop && <Department />}
                </div>
                <div className='search-cont'>
                    <div className='looks'>
                        <input
                            type="text"
                            name='search'
                            placeholder='Search for products...'
                            className='search-in'
                        />
                        <Link to="/searchi"><i class="fas fa-search" /></Link>
                    </div>
                    
                </div>
            </div>
            <div className='nav-links' id={showLinks ?"hiidden":""}>
            <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/services">Services  &nbsp;&nbsp;&nbsp;<i class="fas fa-angle-down" /></Link>
                        {Sdrop && <Services />}
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/sign">Sign in&nbsp;&nbsp;&nbsp;<i class="fas fa-user" /> </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className='cartt'>
                            <i class="fas fa-shopping-cart" />
                            <span className='cart-length'> {cartItem.length === 0 ? "" : cartItem.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header
