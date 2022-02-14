import React from "react";
import "./index.css";
import Img6 from "../image/Pg7.webp";
import bg from "../image/swiggletop.PNG";

const SectionSixComponents = () => {
  return (
    <>
      <div className="SectionSixContainer">
        <div className="headerSectionView">
          <h2 className="headerText">A Mini-Computer for the Internet of Things!</h2>
        </div>
        <div className="SectTextAndImage">
          <div>
            <p>
              The BBC Doctor Who HiFive Inventor is a visually
              <br /> stunning IoT-enabled hand-shaped mini-computer <br />{" "}
              designed to teach kids how to control robots or <br />
              interface with IoT systems to investigate the world <br />
              around them.
              <br/>
              <br />
              Younger students will begin their learning journey with
              <br /> visual block coding and advanced students with
              <br /> Micropython.
              <br />
              <br />
              The HiFive Inventor was developed by Tynker in
              <br /> collaboration with BBC Learning and SiFive, a fabless
              <br /> RISC-V semiconductor company.
            </p>
            <br />
            <p>Learn More:</p>
            <a href="#"><p className="learnpara"> www.HiFiveInventor.com </p></a>
          </div>

          <div>
            <img src={Img6} />
          </div>
        </div>
        <div>
                <img src={bg} className="swiggle"/>         
                   </div>
      </div>
    </>
  );
};

export default SectionSixComponents;
