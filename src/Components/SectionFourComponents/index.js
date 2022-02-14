import React from "react";
import "./index.css";
import p4Img from '../image/Pg4.webp';
import p4Img2 from '../image/Pg3.webp';
import bgg from '../image/swiggletop.PNG';
import bswig from '../image/swigglebottom2.PNG';

const SectionFourComponents = () => {
  return (
    <>
      <div className="sectionFourContainer">
      <div>
          <img className="bgtop" src={bgg}/>
        </div>
        <div className="SubSect1">
       
          <div>
            <img src={p4Img}/>
          </div>

          <div className="p4TextSection">
            <div>
              <div className="sect4header">
                <h2>Parents </h2>
              </div>

              <div>
                <p>
                  Coding is quickly becoming an essential skill, one that will
                  prepare<br/> your kids to succeed in an increasingly digital world.<br/>
                 <br/>
                  Tynker offers a range of options to learn coding: Your
                  children can<br/> learn to code with our self-paced, <a href="#">immersive
                  game-like courses,</a> and<br/> then advance to learning real-world
                  Python and JavaScript.<br/>
                </p>
                <br/>
                <p>
                Select the option that’s best for your
                  child!
                </p>
                <br/>
                <button className="learnMorebtn"> Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="SubSect2">
          <div>
            <img src= {p4Img2}/>
          </div>

          <div className="p4TextSection">
            <div>
              <div>
                <h2>Educators </h2>
              </div>

              <div>
                <p>
                  Join over 100,000 schools that use Tynker to engage students
                  with<br/> coding and connect with other educators who love to code!<br/>
                  <br/>
                  Teaching coding with Tynker is as easy as 1-2-3. In just
                  minutes, you can<br/> <a href="#">create a free account </a>, set up your virtual
                  classroom, and assign ready-<br/>made lesson plans!<br/> 
                  <br/>
                  Tynker empowers K-12 educators with free PD, standards-aligned<br/> curricula,
                  cross-curricular STEM coding, AP Computer Science courses,<br/> and
                  many great coding resources.
                </p>
                <br/>
                <button className="learnMorebtn"> Learn More</button>
              </div>
            </div>
          </div>      
        </div>
        <div>
          <img className="bgbottom"  src={bswig}/>
        </div>
      </div>
    </>
  );
};

export default SectionFourComponents;
