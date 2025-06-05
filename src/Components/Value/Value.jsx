import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown }  from "react-icons/md";

import "./Value.css";


import data from "../../utils/accordion";

const Value = () => {
  const [className, setClassName] = useState(null);    //i made these use state function to change accordian with accordian state
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">        {/*i am using the same classname as image-container i used for showing the 1st page image as the property image big image u see that so iwant in that mannner so i will use the same  container*/}
            <img src="./main3.jpg" alt="" />
          </div>
        </div>




        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always help you to find the right Property <br /> Best service
            you can get is from us related to buying the best property that will
            have great value in future
          </span>






          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >







            {data.map((item, i) => {             //thsi data we obtained from accordion.jsx in utils
              return (
                <AccordionItem                                          /* remember the whole clickable box we make for taht we need this tag */
                  className={`accordionItem ${className}`}                     //as we will be changing the accordian as per the  class name so we wrotein javascript format
                  key={i}
                  uuid={i}                                     //uuid we willbe using as we need it in onChange
                >




                  <AccordionItemHeading>


                    <AccordionItemButton className=" flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>              {/* the small small different icons thsi is for taht  */}
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />                      {/*The icon MdOutlineArrowDropDown from react-icons/md is a Material Design icon that looks like this:
⬇️ (a simple downward-facing arrow) */}
                      </div>
                    </AccordionItemButton>                      



                  </AccordionItemHeading>




                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>



                </AccordionItem>
              );
            })}






          </Accordion>






        </div>
      </div>
    </section>
  );
};

export default Value;
