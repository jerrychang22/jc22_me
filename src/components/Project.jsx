import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { projs } from '../utils/constants.js';

import JCPNG from '../misc/JC2.jpg';

function ProjectCard(props) {
    return (
            <CardContainer>
                <button> 
                    Card 
                </button>
            </CardContainer>
    );
}

function ProjectList(props) {
    
    var proj_list = projs.map((proj) => <li> <ProjectCard /> </li>);
    return (
        <div>
            <ProjectHeader>
                <ProjectH> <h1> Projects </h1> </ProjectH> 
                <ProjectH> Some stuff I did </ProjectH>
            </ProjectHeader>
            
            <ProjectsContainer>
                <ProjectDisplay>
                
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
`;

const ProjectDisplay = styled.div`
    display: flex;
    flex-basis: 640px;
    flex-grow: 1;

    background-image: url(${JCPNG});
    background-size: cover;
    height: 80vh;
    
    position: sticky;
    top: 15vh;
`;

const ProjectsBox = styled.div`
    display: flex;
    flex-basis: 640px;
    flex-grow: 2;

    position: sticky;
    top: 15vh;
`;

const ListContainer = styled.ul`
    width: 100%;
`;

const CardContainer = styled.div`
    display: flex;
    height: 20vh;
    width: 100%;
    border-top: 2px solid #06B25F; 
    border-bottom: 2px solid #06B25F; 

`;
export { ProjectCard, ProjectList, ProjectPage };
