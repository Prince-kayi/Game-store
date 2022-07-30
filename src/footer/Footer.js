import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaAmazonPay, FaCcDiscover, FaCcDinersClub } from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <div className='up-foot'>
        <div className='begin'>
          <h1>9 <sup>Win a voucher every month</sup></h1>
        </div>
        <div className='end'>
          <input
            type="text"
            name='search'
            placeholder='enter your email...'
          />
          <button className='sub'>Subscribe</button>
          <div className='terms'>T&Cs&nbsp;
            <abbr title="Sign up & stay signed to our news to win $10,0000 Play voucher every month">i</abbr>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="socials">
            <h2>Follow&nbsp;Us&nbsp;On</h2>
            <div className="linkss ">&nbsp;
              <Link to="/facebook"><FaFacebook /></Link>
              <Link to="/twitter"><FaTwitter /></Link>
              <Link to="/instagram"><FaInstagram /></Link>
              <Link to="linkedin"><FaLinkedinIn /></Link>
              <Link to="/youtube"><FaYoutube /></Link>
              <Link to="/youtube"><FaWhatsapp /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='low-foot'>
        <div className="wrap">
          <div className="links">
            <ul>
              <h2>Help Center</h2>
              <li className="link"> <Link to="/faq">FAQ</Link></li>
              <li className="link"> <Link to="/contact-us">Contact Us</Link></li>
              <li className="link"><Link to="/find-store">Find Store</Link></li>
              <li className="link"><Link to="/gift-vouchers">Gift Vouchers</Link></li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <h2>What We offer</h2>
              <li className="link"><Link to="/any-prices"> We beat any Price</Link></li>
              <li className="link"><Link to="/competition">Competition</Link></li>
              <li className="link"><Link to="/beat-price">Price Beat</Link></li>
              <li className="link"><Link to="/tech squad">Tech Squad</Link></li>
              <li className="link"><Link to="/install">Installation Services</Link></li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <h2>Policy</h2>
              <li className="link"> <Link to="/terms">Terms and Conditions</Link></li>
              <li className="link"><Link to="/return-policy">Delivery & Returns Policy</Link></li>
              <li className="link"><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <h2>Money Center</h2>
              <li className="link"><Link to="/about-us">About Us</Link></li>
              <li className="link"><Link to="/blogs">Blogs & News</Link></li>
              <li className="link"><Link to="/money-center">About Money Center</Link></li>
              <li className="link"><Link to="/credit-services">Credit Services</Link></li>
              <li className="link"><Link to="/in-store">In-Store Services</Link></li>
            </ul>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <FaCcVisa className="pay" />
        <FaCcMastercard className="pay" />
        <FaCcPaypal className="pay" />
        <FaAmazonPay className="pay" />
        <FaCcDiscover className="pay" />
        <FaCcDinersClub className="pay" />
        <p className="rights">&copy; PayAlot online(pty)  Ltd All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer
