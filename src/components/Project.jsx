import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import * as projects_data from '../misc/projects.json';
import JCPIC from '../misc/JC2.jpg';

function ProjectCard(props) {
    const position = React.useRef(null);
    function scrollToPosition(){
        window.scrollTo({top: position.current.getBoundingClientRect().top + window.pageYOffset - props.scroll * window.innerHeight, behavior: 'smooth'});
    } 

    const project = props.proj;
    var about = project.About.split('@');
    var tags = project.Tags.split('@').map((tag) => <Tag> {tag} </Tag>);

    return (
            <CardContainer ref={position} onClick={scrollToPosition}>
                <CardInfo>
                    <CardTitle>
                        <h3 style={{margin: '1vh 0'}}> #{project.id} {project.Name} </h3>
                        {project.Date}
                    </CardTitle>
                    <CardAbout>
                        <p>{about[0]} </p>
                    </CardAbout>
                </CardInfo>
                <CardTags>
                    {tags}
                </CardTags>
                <CardMore>
                    
                </CardMore>
            </CardContainer>
    );
}

function ProjectList(props) {
    var mobile = (window.innerWidth < window.innerHeight);
    var disp_height = mobile ? 30 : 90;
    var card_scroll = mobile ? 0.4 : 0.15;
    var proj_list = projects_data.items.map((proj) => <ListItem> <ProjectCard proj={proj} scroll={card_scroll}/> </ListItem>);
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
    height: 10vh;
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
    border: 2px solid #06B25F;
    display: flex;
`;

const ProjectPic = styled.img`
    
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
    &:hover{
        border: 1px solid #222222
    }
`;

const CardContainer = styled.div`
    display: flex;
    width: 100%;
    border-top: 2px solid #06B25F; 
    border-bottom: 2px solid #06B25F; 

`;

const CardInfo = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    margin-right: 5%;
`;

const CardTitle = styled.div`
    width: 100%;
`;

const CardAbout = styled.div`
    width: 100%;
    height: 70%;
    font-size: 0.9em;
`;

const CardTags = styled.div`
    display: flex;
    width: 15%;
    margin: 3vh 0;
    flex-direction: column;
`;

const Tag = styled.div`
    display: flex;
    width: 8em;
    margin: 1vh 0;
`;

const CardMore = styled.div`
    display: flex;
    width: 10%;
`
export { ProjectCard, ProjectList, ProjectPage };
