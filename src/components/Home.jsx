import React from 'react';
import styled, { css } from 'styled-components';
import { StyledNavButton, navContentScroll2 } from './NavigationBar.jsx';

import { lerp } from '../utils/lerp.js';
import { maxBlackout } from '../utils/constants.js';
import JCPNG from '../misc/JC2.jpg';

//Home page
function Home(props){

    function navContentScroll(e){
        return navContentScroll2(props, e);
    } 

    return (<div>
                <WhoImage>
                    <WhoBlock>
                        <WhoText>
                            <h2> Who am I? </h2>
                            <h3>
                                My name is Jerry Chang
                            </h3>
                            <p>
                                I'm a mechanical engineering student who loves to design, build, and program. 
                            </p>
                            <p>
                                I pride myself in learning the fundamentals and building quality from the ground up and with extensibility in mind.
                            </p>
                            <p> Learn more about me </p>
                            <StyledNavButton to='/about' onClick={navContentScroll}> About </StyledNavButton>  
                        </WhoText>
                    </WhoBlock>
                </WhoImage>
                <BreakBlock>
                    Test
                </BreakBlock>
                
                <ProjectAndWork>
                    <HomeProject>
                        <ShadowBlock>
                            <div> Projects </div>
                            <StyledNavButton to='/projects' onClick={navContentScroll}> Projects </StyledNavButton>
                        </ShadowBlock>
                    </HomeProject>
                    <HomeWork>
                        <ShadowBlock>
                            <div> Work Experience </div>
                            <StyledNavButton to='/resume' onClick={navContentScroll}> Resume </StyledNavButton>
                        </ShadowBlock>
                    </HomeWork>
                </ProjectAndWork>

                <BreakBlock>
                    Contact me
                </BreakBlock>
            </div>);
}

const WhoImage = styled.div`
    background-image: url('${JCPNG}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

const WhoBlock = styled.div`
    background-image: linear-gradient(to right, rgba(34,34,34, 0.8), rgba(34, 34, 34, 0));
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`;

const WhoText = styled.div`
    margin-left: 5%;
    width: 35%;
    height: 40%;
    color: white;
    font-size: 1.5em;
`;

const BreakBlock = styled.div`
    border-top: 2px solid #06B25F; 
    border-bottom: 2px solid #06B25F; 
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: black;
    text-align: center;
    font-size: 2em;
`;

const ProjectAndWork = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const HomeProject = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 640px;

    background-image: url(${JCPNG});
    background-size: cover;
    height: 90vh;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: white;
`;

const HomeWork = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 640px;

    background-image: url(${JCPNG});
    background-size: cover;
    height: 90vh;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: white;
`;

const ShadowBlock = styled.div`
    background-color: rgba(34,34,34,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`;

export { Home };
