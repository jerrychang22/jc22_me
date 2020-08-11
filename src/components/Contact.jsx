import React from 'react';
import styled, { css } from 'styled-components';

function Contact(props){
    return (<div>
                <h1> Contact me :) </h1>
            </div>);
}

function ContactFooter(props){
    return (
        <StyledContactFooter>
            <ContactItem href="mailto:jerrychang22@gmail.com">
                Email
            </ContactItem>
            
            <ContactItem href="https://www.linkedin.com/in/jerrychang22/">
                LinkedIn
            </ContactItem>

            <ContactItem href="https://github.com/jerrychang22/">
                Github
            </ContactItem>
            
            <Copyright>Jerry Chang @ 2020</Copyright> 
        </StyledContactFooter>
    );
}

const StyledContactFooter = styled.div`
    background-color: #06B25F; 
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: white;
    text-align: center;
    font-size: 1em;
    position: relative;
`;

const ContactItem = styled.a`
    margin: 5vw;
`;

const Copyright = styled.div`
    position: absolute;
    bottom: 2%;
    right: 1%;
    font-size: 0.7em;
`;

export { Contact, ContactFooter };

