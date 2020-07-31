import React from 'react';
import styled, { css } from 'styled-components';

import JCPNG from '../misc/JC.png';

function About(props) {
    return (
        <div>
            <h1> About </h1>

            <AboutContainer>            
                <Photo src={JCPNG}/>
                <InfoBlock></InfoBlock>
            </AboutContainer>
        </div>
    );
}

const AboutContainer = styled.div`
    text-align: center;
`;

const Photo = styled.img`
    text-align: center;
    border: 2px solid #06B25F;
    box-shadow: 1px 1px #888888;
    margin: 0 auto;
    display: inline-block;
    width: 40vw;
    hegith: 50vh;
`;

const InfoBlock = styled.div`
    display: inline-block;
    width: 40vw;
    height: 50vh;
    background-color: #06B25F;
`;

export { About };
