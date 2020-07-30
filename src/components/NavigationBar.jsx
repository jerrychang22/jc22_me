import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { lerp, lerp2 } from '../utils/lerp.js';
import { scrollSwitch, navMinHeight, navMaxHeight, butMinHeight, butMaxHeight, throttleTime } from '../utils/constants.js';

function NavBar(props) {

    return ( 
        <StyledNavBar height={lerp(navMaxHeight, navMinHeight, props.height)}>

            <Link to="/"> <StyledLogo> JC22 </StyledLogo> </Link>
            
            <StyledButtonGroup>
                <StyledNavButton to="/projects"> Projects </StyledNavButton>
                <StyledNavButton to="/about"> About    </StyledNavButton>
                <StyledNavButton to="/resume"> Resume   </StyledNavButton>
                <StyledNavButton to="/contact"> Contact  </StyledNavButton>
            
            </StyledButtonGroup>

            <StyledRule />
        </StyledNavBar>
    );
}

const StyledLogo = styled.div`
    color: #06B25F;    
    display: inline-block;
    float: left;
`;

const StyledButtonGroup = styled.div`
    display: inline-block;
    float: right;
    /*
    position: absolute;
    right: ${props => props.buttonPosition}vh;
    */
`;

const StyledNavButton = styled(Link)`
    display: inline-block;
    color: #06B25F;
    font-size: 1em;
    margin: 5vh;
    padding: 0.25em 1em;
    border: 2px solid #06B25F;
    border-radius: 3px;
    text-decoration: none;
`;

const StyledRule = styled.hr`
    color: #06B25F;
    position: absolute;
    bottom: 1%;
    width: 80%;
    align: center;
`;

const StyledNavBar = styled.div`
    background-color: #0FF25F;
    display: inline-block;
    position: fixed;
    height: ${props => props.height}vh;
    width: 100%;
`;

//export { StyledNavBar };
export { NavBar };
