import React from "react";
import "./index.css";
import Img1 from "../image/Pg6.webp";
import Img2 from "../image/p6icon-1.webp";
import Img3 from "../image/p6icon-2.webp";
import Img4 from "../image/p6icon-3.webp";
import ImgStar from "../image/fiveStars.PNG";

const SectionFiveComponents = () => {
  return (
    <>
      <div className="SectionFiveContainer">
        <div className="sectFiveHeader">
          <h2 className="headerTitle"> 3 Highly-Rated Mobile Apps for Learning Code </h2>
          <p className="headerTitle2">Download Tynker apps and learn to code on the go.</p>
          <button className="button"> LEARN MORE </button>
        </div>

        <div className="IconSection">
          <div className="imageSection">
            <img src={Img1} className='logoMain' />
          </div>

          <div className="ThreeIconContainer">
            <div className="IconsAndImage">
              <div className="subSect5Image">
                <img src={Img2} />
              </div>

              <div className="subSect5">
                <h2 className="subSect5T1"> Tynker Junior </h2>
                <p className="subSect5T2">
                  Tap-Tap picture coding with voice-overs. Pre-
                  <br />
                  readers solve story-based puzzles and build their
                  <br /> first programs in coding sandboxes. Ages 5-7.
                </p>
                <div className="subSection5-s">
                  <img src={ImgStar} className="star" />
                  <p className="ratingText">4.5 </p>
                  <p className="ratingText"> 2,200+ reviews</p>
                </div>
              </div>
            </div>

            <div className="IconsAndImage">
              <div className="subSect5Image">
                <img src={Img3} />
              </div>

              <div className="subSect5">
                <h2 className="subSect5T1"> Tynker </h2>
                <p className="subSect5T2">
                  Drag-and-drop block coding with a full-featured
                  <br /> workshop. Build games and apps, compose music
                  <br /> and art, control smart devices, and much, much
                  <br /> more. Ages 6-11
                </p>
                <div className="subSection5-s">
                  <img src={ImgStar} className="star" />
                  <p className="ratingText">4.7 </p>
                  <p className="ratingText"> 10,400+ reviews</p>
                </div>
              </div>
            </div>

            <div className="IconsAndImage">
              <div className="subSect5Image">
                <img src={Img4} />
              </div>

              <div className="subSect5">
                <h2 className="subSect5T1"> Mod Creator </h2>
                <p className="subSect5T2">
                  Drag-and-drop Minecraft modding. Design skins,
                  <br /> blocks and items. Modify mob behaviors. Create
                  <br /> mods and add ons. Explore worlds! Ages 6-11.
                </p>
                <div className="subSection5-s">
                  <img src={ImgStar} className="star" />
                  <p className="ratingText">4.0 </p>
                  <p className="ratingText"> 3,300+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFiveComponents;
