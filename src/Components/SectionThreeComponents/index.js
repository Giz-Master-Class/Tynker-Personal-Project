import React from "react";
import "./index.css";
import icon1 from "../image/icon-1.webp";
import icon2 from "../image/icon-2.svg";
import icon3 from "../image/icon-3.jpeg";

const SectionThreeComponents = () => {
  return (
    <>
      <div className="sectionThreeContainer">
        <div>
          <h2 className="sectThreeHeader">
            Tynker has been busy. Good Busy. Check out what’s NEW!
          </h2>
        </div>

        <div className="p3IconSection">
          <div>
            <div>
              <img src={icon1} />
            </div>
            <div>
              <h2>AP Computer Science</h2>
              <p>
                2 New AP® CS courses endorsed by
                <br /> the College Board.{" "}
              </p>
              <a href="#"> Learn More</a>
            </div>
          </div>

          <div>
            <div>
              <img src={icon2} />
            </div>
            <div>
              <h2>Live Classes</h2>
              <p>
                Live coding classes with a private <br /> teacher{" "}
              </p>
              <a href="#"> Learn More</a>
            </div>
          </div>

          <div>
            <div>
              <img src={icon3} className="iconThree" />
            </div>
            <div>
              <h2>Tynker + BYJU'S</h2>
              <p>
                Tynker has joined the BYJU’S family <br /> of brands.{" "}
              </p>
              <a href="#"> Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThreeComponents;
