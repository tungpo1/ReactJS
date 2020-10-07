import React, {useState} from 'react';
import styled from "styled-components";
import {Container,Row, Col, Button} from "reactstrap";
import {INFOR} from "../../../../const/common";
const StyleCol = styled(Col)`
display: flex;
    p{
        font-family: ProximaNovaBold;
        font-size: 14px;
        color: #333333 ;
    }
    span{
        position: absolute;
        font-family: ProximaNovaRegular;
        font-size: 14px;
        color: #333333 ; 
        left: 75px;
        top: 1px;
    }
`;
const StyleCol1 = styled(Col)`

    p{
        font-family: ProximaNovaBold;
        font-size: 16.33px;
        color: #333333 ;
        margin-bottom: 10px;
    }
    a{
        font-family: ProximaNovaBold;
        font-size: 16.33px;
        color: #4ac2e1 ; 
        text-decorate: none;
    }
`;
const CustomSpan = styled.span`
        font-family: ProximaNovaRegular;
        font-size: 14px;
        color: #363636 ; 
`;
const CustomButton = styled(Button)`
border-radius: 0;
font-family: ProximaNovaRegular;
font-size: 16px;
margin-top: 25px;
color: #ffffff ;
text-transform: uppercase; 
background-color: #082c44;
 &:hover{
    background-color: #082c44;
    opacity: 0.8; 
 }
 &:focus{
    background-color: #082c44;
    opacity: 0.8; 
 }
`;
function Infor() {
    return (
        <Container style={{marginTop: "32px",borderBottom: "1px solid #d2d2d2",paddingRight: "0",
        paddingLeft: "0",paddingBottom: "30px"}}>
            <Row>
                <StyleCol>
                <p>Sire</p>
                <span>Snippetson</span>
                </StyleCol>
                <StyleCol>
                <p>Gender</p>
                <span>Colt</span>
                </StyleCol>
                <StyleCol>
                <p>Foaled</p>
                <span>Oct 5th, 2017</span>
                </StyleCol>
                <StyleCol>
                <p>Trainer</p>
                <span>Jess</span>
                </StyleCol>
            </Row>
            <Row>
                <StyleCol>
                <p>Dam</p>
                <span>China Doll</span>
                </StyleCol>
                <StyleCol>
                <p>Age</p>
                <span>April 1, 2012</span>
                </StyleCol>
                <StyleCol>
                <p>Country</p>
                <span>Italia</span>
                </StyleCol>
                <StyleCol>
                <p>Location</p>
                <span>Cranbourne</span>
                </StyleCol>
            </Row>
            <CustomSpan>A great type from a strong staying family</CustomSpan>
            <Row style={{paddingTop:"30px"}}>
                <StyleCol1 lg="12"><p>Cost Price: <a href="#">$10,000 (plus GST)</a></p></StyleCol1>
                <StyleCol1 lg="12"><p>Phone: <a href="#"> Jess 0407 308 390 </a></p></StyleCol1>
                <StyleCol1 lg="12"><p>Mail: <a href="#"> jess@patemanracing.com </a></p></StyleCol1>
            </Row>
            <CustomButton>Enquire</CustomButton>
        </Container>
    );
}

export default Infor;

