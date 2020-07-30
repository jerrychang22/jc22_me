import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { lerp, lerp2 } from './utils/lerp.js';
import { navMaxHeight, scrollSwitch, throttleTime } from './utils/constants.js';

import { NavBar } from './components/NavigationBar.jsx';
import { ProjectCard, ProjectList, ProjectPage } from './components/Project.jsx';
import { Resume } from './components/Resume.jsx';


import styled, { css, createGlobalStyle } from 'styled-components';
import JBM from './misc/JetBrainsMono-Bold.woff2';

function App(){

    //React hook to detect scrolling
    //Create hook
    const [heightPercent, setPercent] = React.useState(0);

    //Define triggering function
    const handleScroll = () => {
        const scroll = window.scrollY / window.innerHeight;
        (scroll * 100 > scrollSwitch) ? setPercent(1) : setPercent( lerp2(0, scrollSwitch / 100, 0, 1, scroll) );
    }

    //Attach event and hook
    React.useEffect(() => {
        //throttle scroll event
        const timer = setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
        }, throttleTime);
        return () => clearTimeout(timer);
    })

    //Main app
    return (
        <Router>
            <GlobalStyle />
            <div>
                <NavBar height={heightPercent}/>
                <div style={{height: navMaxHeight + 'vh'}}></div>
                
                <ContentBody> 
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route path="/projects"> <ProjectList name="projects"/> </Route>
                        <Route path="/about"> <ProjectList name="about"/> </Route>
                        <Route path="/resume"> <Resume /> </Route>
                        <Route path="/contact"> <ProjectList name="contact"/> </Route>
                    </Switch>
                </ContentBody>
            </div>
        </Router>
    );
}

function Home(props){
    return (<div>
                <div style={{height: 100 + 'vh'}}>
                    Test
                </div>
            Hello world
            </div>);
}

const ContentBody = styled.div`
    
    margin : 10vh;
    margin-top: 15vh;
`;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'JetBrainsMono';
        src: url('${JBM}') format('woff2');
    }

    * {
        font-family: "JetBrainsMono" !important;
    }

    body {
        margin : 0;
    }
`

ReactDOM.render(<App />, document.getElementById('app'));
