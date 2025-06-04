import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div>


    <section className="h-wrapper">
    <div className="flexCenter paddings innerWidth h-container">    {/* look here the div calssname is h-container   and i have made the css classNames flexCenter and  paddings in index.css */}
    <img src="/logo.jpg"   alt="logo"  width={100}/>

    <div className="flexCenter h-menu">
    <a href="">Residencies</a>
    <a href="">Our Value</a>
    <a href="">Contact Us</a>
    <a href="">Get Started</a>
    <button className="button">contact</button>    {/* for the button to look more stylish we use this class=button in index.css */}
    </div>

    </div>
    </section> 

      
    </div>
  )
}

export default Header
