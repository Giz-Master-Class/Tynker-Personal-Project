import React from "react";
import './index.css';
import badge1 from '../image/badge1.webp';
import badge2 from '../image/badge2.png';
import badge3 from '../image/badge3.png';
import badge4 from '../image/badge4.png';
import badge5 from '../image/badge5.png';
import badge6 from '../image/badge6.png';
import badge7 from '../image/badge7.png';
import badge8 from '../image/badge8.webp';
import badge9 from '../image/badge9.webp';








const SectionTenComponents =()=>{

    return(
<>
        <div className="SectTenContainer">
        <div className="BadgeContainer">
            
            <img src={badge1} className="badge" />
            <img src={badge2} className="badge" />
            <img src={badge3} className="badge"/>
            <img src={badge4} className="badge"/>
            <img src={badge5} className="badge"/>
            <img src={badge6} className="badge"/>
            <img src={badge7} className="badge"/>
            <img src={badge8} className="badge"/>
            <img src={badge9} className="badge"/>

        </div>

        

<div className="ListRow">

        <div>
        <h5>ABOUT</h5>
        <p className="AboutTag">
        Tynker is the world’s leading K-12 <br/> creative coding platform, enabling<br/> students of all ages to learn to code at<br/> home, school, and on the go. Tynker’s<br/> highly successful coding curriculum<br/> has been used by one in three U.S. K-8<br/> schools, 100,000 schools globally, and<br/> over 60 million kids across 150<br/> countries. 
        </p>
        </div>

        <div>
        <h5>RESOURCES</h5>

        <ul className="List">

        <a href="#"><li> Blog</li>          </a>
        <a href="#"><li> About Us</li>      </a>
        <a href="#"><li> Press</li>         </a>
        <a href="#"><li> Jobs</li>          </a>
        <a href="#"><li>  Mobile Apps</li>   </a>
        <a href="#"><li> Coding eBooks</li> </a>
        <a href="#"><li> Scholarship</li>   </a>
        <a href="#"><li> Forum</li>         </a>
        <a href="#"><li> Store</li>         </a>
        <a href="#"><li> CS Authors</li>    </a>
         </ul> 
        </div>

        <div>
        <h5>PARENTS</h5>
        <ul className="List">

        <a href="#">  <li> Overview</li>    </a>
        <a href="#">  <li>Live coding</li>  </a>
        <a href="#">  <li>Classes</li>      </a>
        <a href="#"> <li>Give a Gift</li>   </a>
        <a href="#"> <li>Redeem</li>        </a>
        <a href="#"> <li>Why Coding</li>    </a>
        <a href="#"> <li> Featured</li>     </a>
        <a href="#"> <li>  Makers</li>      </a>
        </ul>

        </div>

        <div>
        <h5>EDUCATORS</h5>
        <ul className="List">
        <a href="#"> <li>Overview</li>         </a>
        <a href="#"> <li>Elementary</li>       </a>
        <a href="#"> <li> Middle school</li>   </a>
        <a href="#"> <li> High school</li>     </a>
        <a href="#">  <li> AP CS Courses</li>  </a>
        <a href="#">  <li>PD</li>              </a>
        <a href="#">  <li>Hour of code</li>     </a>
        <a href="#">  <li> STEM Projects</li>   </a>
        <a href="#">  <li>Request a Quote</li>  </a>
        </ul> 
        </div>


        <div>
        <h5>PARENT NEWSLETTER</h5>
        <input  className="Holder" placeholder="Enter Your Email"/>
        <button className="btn10">OK</button>
        </div>

        </div>   
      

        <hr className="line"/>     

</div>
</>
    );
}


export default SectionTenComponents;