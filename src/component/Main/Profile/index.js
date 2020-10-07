import React, {useState} from 'react';
import styled from "styled-components";
import Title from "./Title";
import Infor from "./Infor";
const Wrapper = styled.div`
margin-top: 65px;
border-bottom: 1px solid #d2d2d2;
    h5{
        font-family: ProximaNovaRegular;
        font-size: 15px;
        color: #ffffff ;
        text-transform: uppercase;
        padding-top: 11px;
        padding-left: 11px;
        padding-right: 16px;
        padding-bottom: 10px;
        background-color: #082c44;
        width: 78px;
        margin-bottom: 0;
    }
 } 
`;

function Profile() {
    return (
        <>
        <Wrapper>           
            <h5>PROFILE</h5>
        </Wrapper>
        <Title text = "Pendragon (NZ)/Utah Red (x Red Randsom) Colt" year = "2 year old Chestnut Colt"/>
        <Infor />
        </>
    );
}

export default Profile;