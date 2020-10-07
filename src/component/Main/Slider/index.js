import React, {Component,useEffect, useState, useRef} from 'react';
import Slider from 'react-slick';
import styled from "styled-components";
import Next from "../../../images/icon/right-arrow.png";
import Prev from "../../../images/icon/left-arrow.png";
import Bigslide1 from "../../../images/Slide/BigSlide1.jpg";
import Slide1 from "../../../images/Slide/slide1.jpg";
import Slide2 from "../../../images/Slide/slide2.jpg";
import Slide3 from "../../../images/Slide/slide3.jpg";
import Slide4 from "../../../images/Slide/slide4.jpg";
import Slide5 from "../../../images/Slide/slide5.jpg";
import Slide6 from "../../../images/Slide/slide2.jpg";
import Slide7 from "../../../images/Slide/slide3.jpg";
import Slide8 from "../../../images/Slide/slide2.jpg";

const NextArrow = styled.div`
width: 43px;
`;

const PrevArrow = styled.div`
width: 43px;
`;
const Wrapper = styled.div`

  h3{
    font-family: ProximaNovaBold;
    font-size: 25px;
    color: #333333 ; 
    margin-top: 30px;
    margin-bottom: 23px;
  }
.slick-prev{
  left: 0px;
  top: calc(50% - 45px);
  z-index: 5;
  &:before{
    display: none; 
  }
} 
.slick-next{
  right: 0;
  top: calc(50% - 45px);
  &:before{
    display: none; 
  }
}
`;
export default function SyncSlider() {
    const [nav1,setNav1] = useState(null);
    const [nav2,setNav2] = useState(null);
    let slider1 = [];
    let slider2 = [];
 
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
      }, [slider1,slider2])
        const setting1 = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      lazyLoad: false,
    infinite: true,
    arrows: true,
    nextArrow: <NextArrow><img src={Next} width="43px"/></NextArrow>,
    prevArrow: <PrevArrow> <img src={Prev} width="43px"/></PrevArrow> ,
     autoplay: true,
    autoplaySpeed: 2000,
  };
 
    return (
        <div>
       <Wrapper>
         <h3>Gallery</h3>
          <Slider
            asNavFor={nav2}
            ref={slider => (slider1 = slider)}
            {...setting1}
          >
          <div>
           <img src={Bigslide1} className="w-100" height ="450px" />
           </div>
           <div>
             <img src={Slide2} className="w-100" height ="450px"/>
           </div>
           <div>
             <img src={Slide3} className="w-100" height ="450px"/>
           </div>
           <div>
             <img src={Slide4} className="w-100" height ="450px"/>
           </div>
           <div>
             <img src={Slide5} className="w-100" height ="450px"/>
           </div>
           <div>
             <img src={Slide6} className="w-100" height ="450px"/>
           </div>
           <div>
             <img src={Slide7} className="w-100" height ="450px" />
           </div>
           <div>
             <img src={Slide8} className="w-100" height ="450px" />
           </div>
          </Slider>
          </Wrapper>
          <Slider 
            asNavFor={nav1}
            ref={slider => (slider2 = slider)}
            slidesToShow={7}
            swipeToSlide={true}
            focusOnSelect={true}
           >
            <div>
           <img src={Slide1} className="dot-img" />
           </div>
           <div>
             <img src={Slide2} className="dot-img" />
           </div>
           <div>
             <img src={Slide3} className="dot-img" />
           </div>
           <div>
             <img src={Slide4} className="dot-img" />
           </div>
           <div>
             <img src={Slide5} className="dot-img" />
           </div>
           <div>
             <img src={Slide6} className="dot-img" />
           </div>
           <div>
             <img src={Slide7} className="dot-img" />
           </div>
           <div>
             <img src={Slide8} className="dot-img" />
           </div>
          </Slider>
        </div>
      );
};

