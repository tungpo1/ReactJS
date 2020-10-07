import React from 'react';
 import { Container,Row,Col } from "reactstrap";
 import LogoText from "../../images/BG/Logo.png";
 import LogoFoot from "../../images/BG/footer.png"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faInstagram } from "@fortawesome/fontawesome-free-brands";
import styled from 'styled-components';
const CustomCol = styled(Col)`
padding-top: 55px;
    img{
        width: 260px;
        height: 62px;
    }
`;

const CustomCol1 = styled(Col)`
padding-top: 70px;
    ul{    
        justify-content: flex-end;
        display: flex;
        list-style: none;
        & li{
            width: 22px;
            height: 22px;
            background: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 15px;
            & a{
                color: black;
                font-size: 14px;
            }
        }
    }
`;
const CustomCol2 = styled(Col)`
display: flex;
    p{
        margin-top: 50px;
        font-family: MontserratMedium;
        font-size: 14.4px;
        &:nth-of-type(1){
            color: rgba(255, 255, 255, 0.5);
        }
        &:nth-of-type(2) {
            color: rgba(255, 255, 255, 0.23);
            padding-left: 65px;
          }
    }
`;
const CustomCol3 = styled(Col)`
display: flex;
justify-content: flex-end;
    h4{
        text-align: center;
        font-family: OpenSansBoldItalic;
        font-size: 14.38px;
        color: #ffffff;
        margin-top: 50px;
    }
    img{
        width: 104px;
         height: 31px;
         padding-left: 15px;
         margin-top: 45px;
    }
`;

 function Footer() {
     return (
         <div className="footer">                                                                                          
            <Container>
        <Row>
            <CustomCol>
            <img src= {LogoText} />
            </CustomCol>
            <CustomCol1>
            <ul>
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
            </CustomCol1>
        </Row>
        <Row>
            <CustomCol2>
            <p>© 2018 Pateman Racing</p>
          <p>Term and condition</p>
            </CustomCol2>
            <CustomCol3>
            <h4>POWERED BY</h4>
          <img src= {LogoFoot} />
            </CustomCol3>
        </Row>
            </Container>

         </div>
     );
 }

 export default Footer;

