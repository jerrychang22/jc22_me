import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { projs } from '../utils/constants.js';

import JCPIC from '../misc/JC2.jpg';

function ProjectCard(props) {
    return (
            <CardContainer>
                <CardInfo>
                    <CardTitle>
                        #1 Name <br />
                        Date
                    </CardTitle>
                    <CardAbout>
                        <p>About</p>
                    </CardAbout>
                </CardInfo>
                <CardTags>
                    Elec
                </CardTags>
                <CardMore>
                    More button
                </CardMore>
            </CardContainer>
    );
}

function ProjectList(props) {
    var disp_height = (window.innerWidth < window.innerHeight) ? 30 : 90; 
    var proj_list = projs.map((proj) => <ListItem> <ProjectCard /> </ListItem>);
    return (
        <div>
            <ProjectHeader>
                <ProjectH> <h1> Projects </h1> </ProjectH> 
                <ProjectH> Some stuff I did </ProjectH>
            </ProjectHeader>
            
            <ProjectsContainer>
                <ProjectDisplay height={disp_height}>
                    <ProjectImage />
                </ProjectDisplay>
                <ProjectsBox>
                    <ListContainer> {proj_list} </ListContainer>
                </ProjectsBox>
            </ProjectsContainer>
        </div>
    );
}

function ProjectPage(props) {
    return;
}

const ProjectHeader = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ProjectH = styled.div`
    font-size: 1em;
    width: 40vw;
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ProjectDisplay = styled.div`
    display: flex;
    flex-basis: 640px;
    flex-grow: 1;

    background-color: white;
    height: ${props => props.height}vh;
    
    position: sticky;
    top: 10vh;
    z-index: 998;
`;

const ProjectImage = styled.div`
    background-image: url(${JCPIC});
    background-size: cover;
    width: 100%;
    z-index: 999;
    margin: 5vh 2vw;
`;

const ProjectsBox = styled.div`
    display: flex;
    flex-basis: 640px;
    flex-grow: 2;
    z-index: 997;
`;

const ListContainer = styled.ul`
    width: 100%;
    padding: 0;
`;

const ListItem = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const CardContainer = styled.div`
    display: flex;
    height: 20vh;
    width: 100%;
    border-top: 2px solid #06B25F; 
    border-bottom: 2px solid #06B25F; 

`;

const CardInfo = styled.div`
    display: flex;
    flex-grow: 5;
    flex-direction: column;
`;

const CardTitle = styled.div`
    width: 100%;
    height: 20%;
`;

const CardAbout = styled.div`
    width: 100%;
    height: 80%;
`;

const CardTags = styled.div`
    display: flex;
    flex-grow: 2;

`;

const CardMore = styled.div`
    display: flex;
    flex-grow: 1;
`
export { ProjectCard, ProjectList, ProjectPage };
