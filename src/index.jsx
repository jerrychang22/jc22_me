import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from './components/NavigationBar.jsx';
import { Home } from './components/Home.jsx';
import { ProjectCard, ProjectList, ProjectPage } from './components/Project.jsx';
import { About } from './components/About.jsx';
import { Resume } from './components/Resume.jsx';
import { Contact, ContactFooter } from './components/Contact.jsx';

import { lerp, lerp2 } from './utils/lerp.js';
import { navMaxHeight, scrollSwitch, throttleTime } from './utils/constants.js';

import styled, { css, createGlobalStyle } from 'styled-components';
import JBM from './misc/JetBrainsMono-Bold.woff2';
import Pattern from './misc/patterns/dot-grid.png';


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
                <NavBar height={heightPercent} pattern={Pattern}/>
                <div style={{height: navMaxHeight + 'vh'}}></div>
                
                <Switch>
                    <Route exact path="/"> <Home height={heightPercent}/> </Route>
                    <Route path="/projects">
                        <ContentBody pattern={Pattern}> 
                            <ProjectList />
                        </ContentBody>
                    </Route>
                    
                    <Route path="/resume"> 
                        <ContentBody pattern={Pattern}> 
                            <Resume /> 
                        </ContentBody>
                    </Route>

                    <Route path="/about"> 
                        <ContentBody pattern={Pattern}> 
                            <About/> 
                        </ContentBody>
                    </Route>

                    <Route path="/contact"> 
                        <ContentBody pattern={Pattern}> 
                            <Contact />
                        </ContentBody>
                    </Route>
                </Switch>

                <ContactFooter />
            </div>
        </Router>
    );
}


const ContentBody = styled.div`
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 15vh;
    margin-bottom: 10vh;
    min-height: 65vh;
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
        /*
        background-color: black;
        color: white;
        background-image: url(${Pattern});
        background-repeat: repeat;
        */
        margin : 0;
    }
`

ReactDOM.render(<App />, document.getElementById('app'));
