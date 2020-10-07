import React from 'react';
 import { Container } from "reactstrap";
import LogoText from "../../images/BG/Logo.png";
import LogoImg from "../../images/BG/jockeylogo.png";
import rec2 from "../../images/BG/rec2.png";
import styled from "styled-components";


const Wrapper = styled.div`
height: 240px;
width: 100%;
position: relative;
overflow: hidden;
`;
const Logo =styled.div`
position: relative;
width: 970px;
    img{
    position: absolute;    
    width: 260px;
    height: 62px;
    left: 130px;
    top: 16px;
    &:last-of-type{
        width: 36px;
        height: 66px;
        left: 394px;
        top: 118px;
    }
    }
    h2{
        font-family: ProximaNovaSemibold;
        font-size: 25px;
        text-transform: uppercase;
        color: #ffffff;
        left: 130px;
        position: absolute; 
        top: 150px;
    }
`;
const Menu = styled.div`
width: 135px;
height: 160px;
top: -91px;
position: absolute;
right: -77px;
cursor: pointer;
 div{
    width: 22px;
    height: 2px;
    background: #ffffff;
    position: absolute;
    
    &:nth-of-type(1){
        bottom: 55px;
        left: 29px;
    }
    &:nth-of-type(2){
        bottom: 49.5px;
        left: 29px;
    }
    &:nth-of-type(3){
        bottom: 43px;
        left: 29px;
    }
 }
`;
function Header() {
    return (
        <Wrapper className="header">           
       <Logo className="rec">
        <img src={LogoText}  />
        <h2>Horses available</h2>
        <img src={LogoImg} />
       </Logo>
       <Menu className="rec2">
       <div></div>
       <div></div>
       <div></div>
       </Menu>
        </Wrapper>
    );
}

export default Header;