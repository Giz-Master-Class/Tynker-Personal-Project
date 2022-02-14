import React from "react";
import "./index.css";
import Imgquote from '../image/quotemark.png';
import Img1 from '../image/pic1.png';
import Img2 from '../image/pic2.png';
import Img3 from '../image/pic3.png';




const SectionNineComponents =()=>{

    return(
        <>
        <div className="SectNineContainer">
            <div className="TextAndButton">
            <h2> Join Tynker's Global Community</h2>
            <button className=" signUpbtn">SIGN UP FREE</button>
            </div>
        
            <div className="CardsContainer">

<div className="Card1">
    <div className="imageQuote">
    <img src={Imgquote} className="imgQuote"/>
    <p className="Sectpara">I thought a game was<br/> going to be extremely <br/>hard to make, but<br/> Tynker made it really<br/> easy. </p> 
    </div>
    <div className="ImgAndName">
    <div className="headerAndPara">
    <h4>Tynker Featured <br/>Maker</h4>
    </div>
    <img src={Img1} className="Smallpics"/>
    </div>
</div>

<div className="Card2">
<div className="imageQuote">
    <img src={Imgquote} className="imgQuote"/>
    <p className="Sectpara">There's so much<br/> opportunity once they <br/>understand how coding<br/> see them create<br/>incredible things <br/> themselves. </p> 
    </div>
    <div className="ImgAndName">
    <div className="headerAndPara">
    <h4>Charlotte R.</h4>
    <p className="Sectpara2">Parent | Melbourne, <br/> Australia </p>
    </div>
    
    <img src={Img2} className="Smallpics"/>
    </div>
    
</div>


<div className="Card1">
<div className="imageQuote">
    <img src={Imgquote} className="imgQuote"/>
    <p className="Sectpara">Tynker has made<br/> programming fun, <br/>exciting, and simple and<br/> will help lead kids into<br/>their future. </p> 
   </div> 
    <div className="ImgAndName">
    <div className="headerAndPara">
    <h4>Valerie S.</h4>
    <p className="Sectpara2">5th Grade Teacher |<br/> California, US </p>
    </div>
    <img src={Img3} className="Smallpics"/>
    </div>
</div>



</div>
       </div>
        
        </>
    );
}


export default SectionNineComponents;