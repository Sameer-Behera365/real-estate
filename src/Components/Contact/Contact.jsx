import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { BsFillChatDotsFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">                          {/* remeber one thing  we used the same classname in index.css also but as we are importing it from contact.css with classname same as that then contact.css styling will be applied */}
      <div className="paddings innerWidth flexCenter c-container">


      
        {/*------------- left side------------------ */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>




          <div className="flexColStart contactModes">
            {/* -----------first row ----------*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">

                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>

                </div>
                <div className="flexCenter button">Call now</div>
              </div>







              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>






            {/*------------- second row ---------*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>






              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>






        {/*------------------- right side --------------------------*/}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./main4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>


  );
};

export default Contact;
