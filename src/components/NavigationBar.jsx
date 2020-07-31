import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { lerp, lerp2 } from '../utils/lerp.js';
import { scrollSwitch, navMinHeight, navMaxHeight, logoMinSize, logoMaxSize, logoFontScale, logoMinLeft, butMinSize, butMaxSize, hrMinWidth, throttleTime } from '../utils/constants.js';

function NavBar(props) {

    function navHomeScroll(e){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });  
    }

    function navContentScroll(e){
        if (props.height < 1){
            window.scrollTo({
                top: window.innerHeight * scrollSwitch / 100,
                left: 0,
                behavior: 'smooth'
            });  
        }
        else 
            window.scrollTo({
                top: window.innerHeight * scrollSwitch / 100,
                left: 0,
                behavior: 'auto'
            });
    }

    return ( 
        <StyledNavBar height={lerp(navMaxHeight, navMinHeight, props.height)} pattern={props.pattern}>

            <Link to="/" onClick={navHomeScroll}>
                <StyledLogo size={lerp(logoMaxSize, logoMinSize, props.height)} left={lerp(50, logoMinLeft, props.height)}> 
                    <div> JC </div>
                    <div> 22 </div>
                </StyledLogo>
            </Link>
            
            <StyledButtonGroup size={lerp(butMaxSize, butMinSize, props.height)} right={lerp(50, butMinSize, props.height)} >
                <StyledNavButton to="/projects" onClick={navContentScroll}> Projects </StyledNavButton>
                <StyledNavButton to="/about" onClick={navContentScroll}> About    </StyledNavButton>
                <StyledNavButton to="/resume" onClick={navContentScroll}> Resume   </StyledNavButton>
                <StyledNavButton to="/contact" onClick={navContentScroll}> Contact  </StyledNavButton>
            
            </StyledButtonGroup>
            
            <SourceCode visible={(props.height < 0.5)?'visible':'hidden'}> 
                This website was written 
                <br/>
                from scratch in React
                <br/>
                Source code: 
                <a href="https://git.io/JJaz5"> 
                https://git.io/JJaz5
                </a>
            </SourceCode>
            
            <StyledRule width={lerp(hrMinWidth, 100, props.height)} margin={lerp((100 - hrMinWidth)/2, 0, props.height)}/>
        </StyledNavBar>
    );
}

const StyledLogo = styled.div`
    color: #06B25F;    
    display: inline-block;
    width: 1.2em;
    font-size: ${props => props.size}em; 
    position: absolute;
    top: 50%;
    left: ${props => props.left}%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const StyledButtonGroup = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    right: ${props => props.right}%;
    transform: translate(50%, -50%);
`;

const StyledNavButton = styled(Link)`
    display: inline-block;
    color: #06B25F;
    font-size: 1em;
    margin: 1vw;
    padding: 0.25em 1em;
    border: 2px solid #06B25F;
    border-radius: 3px;
    text-decoration: none;
    background-color: #FFFFFF;
`;

const SourceCode = styled.div`
    position: absolute;
    bottom: 2%;
    right: 1%;
    visibility: ${props => props.visible};
    font-size: 0.8em;
    text-align: right;
`;

const StyledRule = styled.hr`
    color: #06B25F;
    width: ${props => props.width}vw;
    position: absolute;
    bottom: 0;
    margin-left: ${props => props.margin}vw;
    margin-bottom: 0;
`;

const StyledNavBar = styled.div`
    
    background-image: url(${props => props.pattern});
    background-repeat: repeat;
    
    background-color: #FFFFFF;
    display: inline-block;
    z-index: 1000;
    position: fixed;
    height: ${props => props.height}vh;
    width: 100%;
`;

//export { StyledNavBar };
export { NavBar };
