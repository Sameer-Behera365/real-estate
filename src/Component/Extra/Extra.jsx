import React from 'react'
import "./Extra.css"
import {HiLocationMarker}  from "react-icons/hi";

const Extra = () => {
  return (
    
    <section className="extra-wrapper">
      <div className="paddings innerWidth flexCenter extra-container">

        <div className="flexColStart extra-left">

          <div className="extra-title">

           <div className="blueCircle"></div>
              <h1>Discover <br/> Most Perfect <br/> Property</h1>
            </div>

            <div className="flexColStart extra-desc">
              <span>Find beautiful properties that suit YOU the best</span>
              <span>You will not face any difficulties in finding the best residencies near you</span>
            </div>


            <div className="flexCenter search-bar">
              <HiLocationMarker color="blue"  size={25}>
                <input type="text" />
                <button className="button">Searchh</button>
              </HiLocationMarker>
            </div>

          </div>    

          <div className="flexCenter extra-right">
            <div className="image-container">
                <img src="./mainpage.jpg" alt="main page" />
            </div>
          </div>  

      </div>
      
    </section>
      
  )
}

export default Extra
