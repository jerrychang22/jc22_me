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

            <hr />
            <b><u>Experience</u></b>  <br/>
            <br />
            
            <b><u> Con Edison </u></b> <br />
            Engineering Aide Intern <br />
            May 2019 - December 2019
            <ul>
                <li> Performed analysis in Excel of patterns in various case categories such as electrical voltage/phase, feeder and network location, and case status </li>
                <li>Wrote several scripts in SQL and macros in Excel to streamline reports and internal processes to save 30 minutes per day</li>
                <li>Created a short-term and long-term solution for managing customer inquiries</li>
            </ul>
            <br />

            <b><u> L3Harris Technologies </u></b> <br />
            QA Associate <br />
            September 2018 - January 2019
            <ul>
                <li>Performed series of tests such as ionic cleanliness testing and tensile strength testing to determine if part quality was within military and company specifications</li>
                <li>Operated an X-ray machine to inspect and search for flaws within FPGA circuits</li>
                <li>Created reports analyzing inspection findings and performed root cause analysis on failure types</li>
            </ul>
            <br />

            <b><u> NASA RMC Team </u></b> <br />
            Robot Design <br />
            September 2019 - March 2020
            <ul>
                <li>Headed the dispensing team and supervised the digging team</li>
                <li>Led the CAD teachings, structure, and organization with OnShape</li>
                <li>Prototyped several dispensing mechanisms to determine viability of different designs</li>
                <li>RMC 2020 competition was cancelled by NASA due to COVID-19</li>
            </ul>
            <br />

            <b><u> Engineering Design </u></b> <br />
            Robot Design <br />
            August 2017 - December 2017
            <ul>
                <li>Developed the overall design of the robot in SolidWorks</li>
                <li>Designed and 3D-printed sonar sensor mounts</li>
                <li>Programmed the autonomous routines for the robot</li>
                <li>Guided team partners in machine usage, wiring practices, and soldering techniques</li>
            </ul>
            <br />   
            
            <b><u> Stuyvesant High School </u></b> <br /> <b><u> FIRST Robotics Team 694 </u></b> <br />
            Lead Machinist, Design Team, Mentor <br />
            September 2015 - June 2017
            <ul>
                <li>Manufactured parts for a robot using mills and lathes</li>
                <li>Prototyped and aided in the design of the overall robot</li>
                <li>Led design groups for mechanism subassemblies like an integrated hopper/feeder and a cube intake</li>
                <li>Currently a mentor : 2017 - 2020</li>
            </ul>
            <br />   

        </div>
    );
}

const ResumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
`;

const StyledResume = styled.img`
    text-align: center;
    border: 2px solid #06B25F;
    box-shadow: 1px 1px #888888;
    display: flex;
    width: 50em;
    margin: 5vh 0;
`;

const InfoBlock = styled.div`
    display: flex;
    line-height: 150%;
    font-size: 0.8em;
    flex-basis: 640px;
`;

export { Resume };

