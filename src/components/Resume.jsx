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
                <InfoBlock>
                    <ResumeInfo />
                </InfoBlock>
            </ResumeContainer>
        </div>
    );
}

function ResumeInfo(props){
    return (
        <div>
            <b>Name : </b> Jerry Chang <br/>
            <b>Email : </b> jerrychang22@gmail.com <br/>
            <b>Phone : </b> Phone <br/>
            <b>Address : </b> Address <br/>
            <b>LinkedIn : </b> <a href="https://linkedin.com/in/jerrychang22"> linkedin.com/in/jerrychang22 </a> <br/>
            <b>Website : </b> <a href="http://jc22.me"> jc22.me </a> <br/>
            <br />

            <b>Education : </b> Stevens Institute of Technology <br/>
            <b>Degree : </b> Bachelor of Engineering in Mechanical Engineering <br/>
            <b>Course Work : </b> Intro to Robotics, Control Systems, Intro to Modern Control Engineering, Design of Machine Components, Thermal Engineering, Fluid Dynamics, Engineering Design <br/>
            <b>GPA : </b> 3.808 <br/>
            <br />

            <b>Skills : </b> SolidWorks, AutoCAD, Machining, Linux, Electronics, ANSYS, Word, Excel, PowerPoint <br/>
            <b>Programming : </b> Python, Java, C, C++, MATLAB, Arduino, HTML/CSS, JS/React, SQL <br/>
            <br />            

            <b>Experience</b>  <br/>
            
        </div>
    );
}

const ResumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    height: 100%;
    line-height: 150%;
`;

export { Resume };

