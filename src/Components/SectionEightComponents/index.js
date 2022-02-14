import React from "react";
import "./index.css";
import logo1 from '../image/logoApple.PNG';
import logo2 from '../image/logoGoogle.PNG';
import logo3 from '../image/logoMicrosoft.PNG';
import logo4 from '../image/logoPBS.PNG';
import logo5 from '../image/logoBBC.PNG';
import logo6 from '../image/logoFacebook.PNG';
import logo7 from '../image/logoLego.PNG';
import logo8 from '../image/logoMinecraft.PNG';
import logo9 from '../image/logoMattel.PNG';
import logo10 from '../image/logoHwheels.PNG';
import logo11 from '../image/logoBarbie.PNG';




const SectionEightComponents =()=>{

    return(
        <>
            <div className='SectEightContainer'>

               <div className="container"> 
                <div className="TextSection">
                    <h2>Trusted by Leading Brands</h2>
                    <p>
                    Our methods for learning to code all are provided within a safe, moderated community that is built<br/> 
                    around encouraging students to gain confidence in their abilities and do so without fear of failure.
                    </p>
                    </div>
            <div className="ImgSection">        
            <div className="batch1">
                <img src={logo1} className="logo"/>
                <img src={logo2} className="logo"/>
                <img src={logo3} className="logo"/>
                <img src={logo4} className="logo"/>
                <img src={logo5} className="logo"/>
                <img src={logo6} className="logo"/>
                </div>   
                
                

                <div className="batch2">               
                <img src={logo7} className="logo"/>
                <img src={logo8} className="logo" />
                <img src={logo9} className="logo"/>
                <img src={logo10} className="logo"/>
                <img src={logo11} className="logo"/>
                </div>            
           
            </div>
            </div>
        </div>
        </>
    );
}
export default SectionEightComponents;