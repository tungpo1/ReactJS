import React from 'react';

import Red from "../../../../images/BG/red.png";
import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
    img{
        width: 95px;
        height: 55px !important;
        position: absolute;
        right: 0px;
        bottom: 65px;       
    }
    p{
        position: absolute;
        font-family: ProximaNovaBold !important;
        font-size: 14px !important;
        color: #fefefe !important;
        right: 7px;
        bottom: 57px;
        text-transform: uppercase;
     
    }

`;
function TextHover({text}) {
    return (
        <Wrapper>
        <img src={Red} />
    <p>{text}</p>
        </Wrapper>
    );
}
export default TextHover;