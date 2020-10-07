import React, {useState} from 'react';
import Hourse1 from "../../../images/Hourse/1.jpg";
import TextHover from "./TextHover";
import styled from "styled-components";
import Red from "../../../images/BG/red.png";
import Pic1 from '../../../images/Hourse/1.jpg';
import Pic2 from '../../../images/Hourse/2.jpg';
import Pic3 from '../../../images/Hourse/3.jpg';
import Pic4 from '../../../images/Hourse/4.jpg';
import Pic5 from '../../../images/Hourse/5.jpg';
const Hover = styled.div`
position: relative;
img{
    width: 95px;
    height: 55px !important;
    position: absolute;
    right: 0px;
    bottom: 0px;       
}
p{
    position: absolute;
    font-family: ProximaNovaBold !important;
    font-size: 14px !important;
    color: #fefefe !important;
    right: 7px;
    bottom: -6px;
    text-transform: uppercase;
 
}
`;
const Wrapper = styled.div`

margin-top: 50px;
 p{
     font-family: ProximaNovaSemibold;
     font-size: 17px;
     color: #333333;
     line-height: 1;
     padding-top: 15px;
     
 }
`;
  const Stylediv = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-top: 15px;
  img{
      &:first-of-type {
        cursor: pointer;
        height: 160px;
      }
  }
  `;
const Hourse = (props) => {

    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
        return (
          <>
       <Stylediv  
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
            <div style={{position: "relative"}}>
            <img src={Pic1} className="w-100" />
            {isShown && (
              <Hover>
                <img src={Red} />
                <p></p>
              </Hover>
               
          )}
            </div>
        <p>Pendragon (NZ)/Utah Red (x Red  Randsom) Colt </p>
         
         </Stylediv>  
         
         <Stylediv  
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
        >
            <div style={{position: "relative"}}>
            <img src={Pic2} className="w-100" />
            {isShown1 && (
              <Hover>
                <img src={Red} />
                <p></p>
              </Hover>
               
          )}
            </div>
        <p>Pendragon (NZ)/Utah Red (x Red  Randsom) Colt </p>
         
         </Stylediv>  
          <Stylediv  
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
          >
              <div style={{position: "relative"}}>
              <img src={Pic3} className="w-100" />
              {isShown2 && (
                <Hover>
                  <img src={Red} />
                  <p>Sold</p>
                </Hover>
                 
            )}
              </div>
          <p>Pendragon (NZ)/Utah Red (x Red  Randsom) Colt </p>
           
           </Stylediv>  
            <Stylediv  
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
            >
                <div style={{position: "relative"}}>
                <img src={Pic4} className="w-100" />
                {isShown3 && (
                  <Hover>
                    <img src={Red} />
                    <p></p>
                  </Hover>
                   
              )}
                </div>
            <p>Pendragon (NZ)/Utah Red (x Red  Randsom) Colt </p>
             
             </Stylediv>  
              <Stylediv  
              onMouseEnter={() => setIsShown4(true)}
              onMouseLeave={() => setIsShown4(false)}
              >
                  <div style={{position: "relative"}}>
                  <img src={Pic5} className="w-100" />
                  {isShown4 && (
                    <Hover>
                      <img src={Red} />
                      <p>Sold</p>
                    </Hover>
                     
                )}
                  </div>
              <p>Pendragon (NZ)/Utah Red (x Red  Randsom) Colt </p>
               
               </Stylediv>  
             
</>
        );
            }
 

 export default Hourse;


 
//  const [isShown, setIsShown] = useState(false);
//  const data = HOURSE.map((item) => {
     
//      return (
//     <Stylediv  
//      onMouseEnter={() => setIsShown(true)}
//      onMouseLeave={() => setIsShown(false)}
//      >
//          <div style={{position: "relative"}}>
//          <img src={item.img} className="w-100" />
//          {isShown && (
//            <Hover>
//              <img src={Red} />
//              <p>{item.sold}</p>
//            </Hover>
            
//        )}
//          </div>
//      <p>{item.title}</p>
      
//       </Stylediv>        
//      );
//  });