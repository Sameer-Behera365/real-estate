import React from 'react'

const Header = () => {
  return (
    <div>


    <section className="h-wrapper">
    <div className="flexCenter paddings h-container">    {/* look here the div calssname is h-container   and i have made the css classNames flexCenter and  paddings in index.css */}
    <img src="logo.jpg"   alt="logo"  width={100}/>

    <div className="h-menu">
    <a href="">Residencies</a>
    <a href="">Our Value</a>
    <a href="">Contact Us</a>
    <a href="">Get Started</a>
    <button>contact</button>
    </div>

    </div>
    </section> 

      
    </div>
  )
}

export default Header
