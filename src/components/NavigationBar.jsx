import React from 'react';
import styled, { css } from 'styled-components';

function NavBar(props) {
    return ( 
        <div className={props.className}>
            <StyledLogo> JC22 </StyledLogo>

            <StyledButtonGroup buttonPosition={props.buttonPosition}>
                <StyledNavButton> Projects </StyledNavButton>
                <StyledNavButton> About    </StyledNavButton>
                <StyledNavButton> Resume   </StyledNavButton>
                <StyledNavButton> Contact  </StyledNavButton>
                <StyledNavButton> Other    </StyledNavButton>
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

const StyledNavButton = styled.button`
    display: inline-block;
    color: #06B25F;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #06B25F;
    border-radius: 3px;
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
