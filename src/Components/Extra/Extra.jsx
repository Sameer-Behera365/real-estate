import React from 'react'
import "./Extra.css"
import {HiLocationMarker}  from "react-icons/hi";
import CountUp from 'react-countup';


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
              <span className="secondaryText">Find beautiful properties that suit YOU the best</span>
              <span className="secondaryText">You will not face any difficulties in finding the best residencies near you</span>
            </div>


            <div className="flexCenter search-bar">
              <HiLocationMarker color="blue"  size={25}>

              </HiLocationMarker>
              <input type="text" />
              <button className="button">Search</button>
            </div>

            <div className="flexCenter stats">    {/* right after the div of search bar i want to display notable members to our users so for that this div i am making */}

             <div className="flexColCenter stat">
             <span>
                <CountUp  start={8500} end={9000} duration={3} /> 
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>

             </div>


             <div className="flexColCenter stat">
             <span>
                <CountUp  start={500} end={900} duration={4} /> 
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
             </div>



             <div className="flexColCenter stat">
             <span>
                <CountUp  start={2} end={15} duration={4} /> 
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
             </div>

            
            </div>
          </div>    

          <div className="flexCenter extra-right">
            <div className="image-container">
                <img src="./main.jpg" alt="main" />
            </div>
          </div>  

      </div>
      
    </section>
      
  )
}

export default Extra
