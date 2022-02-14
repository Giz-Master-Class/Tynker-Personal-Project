import React from "react";
import './index.css';
import imgS2 from '../image/Sec2img.png';



const SectionTwoComponents =()=>{

return(
<>
<div className="sectionTwoContainer">
<div>
    <h2>The #1 Coding Platform for Kids</h2>
    <p>Tynker powers the creativity of over 60 million kids and serves thousands<br/> of schools and educators worldwide.<br/>
    <br/>
        Our interactive story-based learning allows kids to learn the basics with easy<br/> block-based coding challenges before seamlessly transitioning to real-world<br/> text-based languages like JavaScript and Python.<br/>
        <br/>
        With 70+ award-winning courses, there’s a learning path for every kid, no<br/> matter their age or level. We have over 5,000 learning modules, backed by<br/> hundreds of built-in tutorials and hands-on projects.
    </p>
    <br/>
    <button className="Sect2btn"> START CODING NOW</button>
</div>
<div>
<img src={imgS2} className ="secTwoImg"/>
</div>





</div>
</>
);
}

export default SectionTwoComponents;