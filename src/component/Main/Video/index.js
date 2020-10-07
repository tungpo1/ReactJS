import React, {useState} from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";

const Wrapper = styled.div`
width: 100%;
padding-bottom: 50px;
border-bottom: 1px solid #d2d2d2;
 h3{
    font-family: ProximaNovaBold;
    font-size: 25px;
    color: #333333 ; 
    margin-top: 30px;
    margin-bottom: 23px;
 }

`;
function Video() {
    return (
        <Wrapper>
            <h3>Video</h3>
<ReactPlayer width="100%" height="436px"
        url="https://www.youtube.com/watch?v=-IS9EqjhN18"
      />
        </Wrapper>
    );
}

export default Video;