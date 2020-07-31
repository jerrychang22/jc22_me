import React from 'react';
import styled, { css } from 'styled-components';

//import { Document } from 'react-pdf/dist/entry.webpack';
//import { Page } from 'react-pdf';
//import ResumePDF from '../misc/Resume 2020.pdf';
import ResumePNG from '../misc/Resume2020.png';

function Resume(props) {
    return (
        <div>
            <h1> Resume ( 
                <a href='Resume2020.pdf'>Download</a>
                )
            </h1>

            <ResumeContainer>            
                <StyledResume src={ResumePNG}/>
                <InfoBlock></InfoBlock>
            </ResumeContainer>
        </div>
    );
}

const ResumeContainer = styled.div`
    text-align: center;
`;

const StyledResume = styled.img`
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

export { Resume };

