import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StyledNavBar } from './components/NavigationBar.jsx';
import { ProjectCard, ProjectList, ProjectPage } from './components/Project.jsx';

//import { throttle } from './utils/lodash.custom.js';

function lerp(a, b, t) {
    return (a * (1 - t) + b * t);
}

function App(){

    //React hook to detect scrolling
    //Height in vh %'s
    const navMinHeight = 5;
    const navMaxHeight = 50;
    const butMinPosition = 50;
    const butMaxPosition = 0;

    //Create hooks
    const [navHeight, setNavHeight] = React.useState(navMaxHeight);
    const [buttonPos, setButPosition] = React.useState(butMinPosition);

    //Define triggering function
    const handleScroll = () => {
        var scroll = 100 * window.scrollY / window.innerHeight; //scroll height from pixels -> vhs
        console.log(scroll); 
        //Scroll nav height
        if (scroll < (navMaxHeight - navMinHeight)) {
            setNavHeight(lerp(navMaxHeight, navMinHeight, scroll / (navMaxHeight - navMinHeight)));
            setButPosition(lerp(butMinPosition, butMaxPosition, scroll / (navMaxHeight - navMinHeight)));
        }
        else {
            setNavHeight(navMinHeight); 
            setButPosition(butMaxPosition);
        }
    }

    //Attach event and hook
    React.useEffect(() => {
        //throttle scroll event
        const timer = setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
        }, 100);
        return () => clearTimeout(timer);
    })

    return (
        <Router>
            <div>
                <StyledNavBar height={navHeight} buttonPosition={buttonPos}/>
                <div style={{height: navMaxHeight + 'vh'}}></div>
                

                <Switch>
                    <Route path="/">Hello world</Route>
                    <Route path="/projects"> <ProjectList /> </Route>
                    <Route path="/about"></Route>
                    <Route path="/resume"></Route>
                    <Route path="/contact"></Route>
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
