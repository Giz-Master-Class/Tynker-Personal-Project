import React from "react";
import './index.css';
import logodown from '../image/tynkerbottom.png';
import helplogo from '../image/check.png';
import footerImg from '../image/footerpics.png';



const FooterComponents =()=>{

    return(
        <>
    <div className="bottomRow">

<div>
<img src={logodown}/>
</div>

<div className="bottomRowpara">
<p className="para10">© 2022 Neuron Fuel Terms & Conditions | PRIVACY POLICY  |  Kids & Online Safety |   About Us  |  Contact Us</p>
</div>

<div>
<img src={helplogo} className="helpLogo"/>
</div>


</div>


        <div className="Footer">
        <img src={footerImg}/>
        <p  className="footerPtag">Live coding classes with a private teacher</p>
        <button className="footerbtn">SHEDULE A FREE CLASS </button>

        </div>
        </>

    );
}
export default FooterComponents; 