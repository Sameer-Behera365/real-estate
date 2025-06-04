 import React from 'react'
 import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
 import "swiper/css"
 import "./Residencies.css"
 import data from '../../utils/slider.json'
 import { sliderSettings } from '../../utils/common'

 
 const Residencies = () => {
   return (
    <section className="r-wrapper">

    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
        </div>
    </div>



         <Swiper {...sliderSettings}>
         <SliderButtons/>
          {
            data.map((card, i) => (                 
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="Home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
    </section>

    )
 }
 
 export default Residencies



 const SliderButtons=()=>{                         //look u can do like this also after the export default ... ok so no issue
    const swiper=useSwiper();
    return(
        <div className="flexCenter r-button">
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>                       {/*look here we are using the pre made useSwipe() it acts like use state and inbuilt functions like slidePrev()   and   slideNext() */}
        <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>

    )
 };









