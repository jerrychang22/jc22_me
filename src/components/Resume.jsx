import React from 'react';
import styled, { css } from 'styled-components';

//import { Document } from 'react-pdf/dist/entry.webpack';
//import { Page } from 'react-pdf';
//import ResumePDF from '../misc/Resume 2020.pdf';
import ResumePNG from '../misc/Resume2020.jpg';

function Resume(props) {
    return (
        <div>
            <h1> Resume ( 
                <a href='Resume2020.pdf'>Download PDF</a>
                )
            </h1>

            <ResumeContainer>            
                <a href='Resume2020.pdf'>
                    <StyledResume src={ResumePNG}/>
                </a>
                <InfoBlock></InfoBlock>
            </ResumeContainer>
        </div>
    );
}

const ResumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const StyledResume = styled.img`
    text-align: center;
    border: 2px solid #06B25F;
    box-shadow: 1px 1px #888888;
    display: flex;
    width: 40vw;
    hegith: 50vh;
`;

const InfoBlock = styled.div`
    display: flex;
    width: 40vw;
    height: 50vh;
    background-color: #06B25F;
`;

export { Resume };

