import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"
const Header = ({ cartItem }) => {
    return (
        <header className='nav-head'>
            <div className='nav-logo'>
                <h1>
                    <Link to="/" className='logo'> PayAlot</Link>
                </h1>
                <div className='depart'>
                    <Link to="/browse">Browser Department  <i class="fas fa-caret-down" /></Link>
                </div>
                <div className='search-cont'>
                    <div className='looks'>
                        <input
                            type="text"
                            name='search'
                            placeholder='Search..'
                            className='search-in'
                        />
                        <Link to="/searchi"><i class="fas fa-search" /></Link>
                    </div>
                </div>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <Link to="/services">Services  <i class="fas fa-caret-down" /></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">Sign in&nbsp;&nbsp;&nbsp;<i class="fas fa-user" /> </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/orders">Orders</Link>

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
