import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" srcset="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit ac nulla ultricies scelerisque. Vivamus vel dolor ac libero feugiat laoreet. Proin convallis orci ut lectus condimentum, a viverra risus cursus. Fusce sed interdum quam. Duis vitae nisi sit amet sapien dictum tincidunt. Integer nec velit id lorem laoreet suscipit nec sed massa. Sed accumsan, erat sed suscipit pharetra, dui massa posuere elit, non faucibus libero dolor vel sapien.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privact policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 7896541238</li>
                    <li>concact@FoodFiction.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
      <p className="footer-copyright">Copyright 2024 © FoodFiction.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
