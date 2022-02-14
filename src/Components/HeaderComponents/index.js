import React from "react";
import './index.css';
import logo from '../image/tynker-byjus-logo-white.png';
import img from '../image/website-hero-winter-2022.webp';
import imgSquash from '../image/swoosh22.png';




const HeaderComponents =()=>{

return(
<>
<div className="Fusion">
<div className="header">
    <div className="logoSect">
    <img src={logo} className ="logoImg"/>
    </div>
<div className="navBar">
<a href="#">PLAY</a>
<a href="#">PARENTS</a>
<a href="#">EDUCATORS</a>
<a href="#">WHY CODE?</a>
</div>

<div className="navBtn">
<button className="btnTop1">JOIN FOR FREE</button>
<button className="btnTop2">LOG IN</button>
</div>
</div>

<div class="SectionOneBody">
        <section class="textPart">
          <h2 class="pageOneHeader">
            Coding Made Easy
          </h2>
          <p class="pageOnePara1">
          The fun way to learn programming and <br/> develop problem-solving & critical thinking skills! Ages 5-18
          </p>
          <div class="btnSection">
            <button class="btn1"> GET STARTED FOR FREE</button>
            </div>
            <br/>
            <div>
        <p class="pageOnePara2">
          At-home plans for $9 per month
          </p>
        </div>
        </section>
        <div>
          <img src={img} class="toyPicture"></img>
        </div>
        
      </div>
      <img src={imgSquash} className="swoosh"/>
      </div>
</>
);
}

export default HeaderComponents;