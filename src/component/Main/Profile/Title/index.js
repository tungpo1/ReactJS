import React, {useState} from 'react';
import {Container,Col,Row} from "reactstrap";
import styled from "styled-components";
import Icon from "../../../../images/icon/Openbook.png"
const Wrapper = styled(Container)`
padding-top: 30px;
padding-right: 0;
padding-left: 0;
    h2{
        font-family: ProximaNovaBold;
        font-size: 24px;
        color: #0c2d43 ;
        text-transform: uppercase;
    }
    p{
        margin-top: 9px;
        font-family: ProximaNovaRegular;
        font-size: 14px;
        color: #363636 ;
    }
    h3{
        font-family: ProximaNovaSemibold;
        font-size: 13px;
        color: #0d072b ;
        text-transform: uppercase;
        margin-left: 10px;
        margin-top: 8px;
    }
`;

function Title({text,year}) {
    return (
        <Wrapper>     
            <Row>
            <Col lg = "10">
            <h2>{text}</h2>
            <p>{year}</p>
            </Col>  
            <Col lg = "2" style={{display: "flex"}}>
         <img src = {Icon} style={{width: "31px",height: "31px"}} />
         <h3>Pedigree</h3>
            </Col>   
            </Row>     
           
        </Wrapper>
    );
}

export default Title;