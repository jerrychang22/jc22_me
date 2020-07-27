import React from 'react';

function ProjectCard(props) {
    return (<button> Card </button>);
}

//const projs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const projs = [...Array(100).keys()];
function ProjectList(props) {
    var proj_list = projs.map((proj) => <li> {proj} </li>);
    return (<ul> {proj_list} </ul>);
}

function ProjectPage(props) {
    return;
}

export { ProjectCard, ProjectList, ProjectPage };
