import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


function NavBar(props) {
    return ( 
        <div className={props.className}>

            <Link to="/"> <StyledLogo> JC22 </StyledLogo> </Link>
            
            <StyledButtonGroup buttonPosition={props.buttonPosition}>
                <StyledNavButton to="/projects"> Projects </StyledNavButton>
                <StyledNavButton to="/about"> About    </StyledNavButton>
                <StyledNavButton to="/resume"> Resume   </StyledNavButton>
                <StyledNavButton to="/contact"> Contact  </StyledNavButton>
            
            </StyledButtonGroup>

            <StyledRule />
        </div>
    );
}

const StyledLogo = styled.div`
    color: #06B25F;    
    display: inline-block;
`;

const StyledButtonGroup = styled.div`
    display: inline-block;
    position: absolute;
    right: ${props => props.buttonPosition}vh;
`;

const StyledNavButton = styled(Link)`
    display: inline-block;
    color: #06B25F;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #06B25F;
    border-radius: 3px;
    text-decoration: none;
`;

const StyledRule = styled.hr`
    color: #06B25F;
    position: absolute;
    bottom: 1%;
    width: 100%;
    align: center;
`;

const StyledNavBar = styled(NavBar)`
    background-color: #0FF25F;
    display: inline-block;
    position: fixed;
    height: ${props => props.height}vh;
    width: 100%;
`;

export { StyledNavBar };
//export default NavBar;
