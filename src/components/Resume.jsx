import React from 'react';
import styled, { css } from 'styled-components';

import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf';
import ResumePDF from '../misc/Resume 2020.pdf';

function Resume(props) {
    return (
        <div>
            <h1> Resume ( 
                <a href='./static/Resume\ 2020.pdf'>Download</a>
                )
            </h1>

            <ResumeContainer>            
                <StyledResume file={ResumePDF}>
                    <Page pageNumber={1} />
                </StyledResume>
                <InfoBlock></InfoBlock>
            </ResumeContainer>
        </div>
    );
}

const ResumeContainer = styled.div`
    text-align: center;
`;

const StyledResume = styled(Document)`
    text-align: center;
    border: 2px solid #06B25F;
    box-shadow: 1px 1px #888888;
    margin: 0 auto;
    display: inline-block;
`;

const InfoBlock = styled.div`
    display: inline-block;
    width: 30vw;
    height: 70vh;
    background-color: #06B25F;
`;

export { Resume };

