import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { projs } from '../utils/constants.js';

function ProjectCard(props) {
    return (<button> Card </button>);
}

//const projs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ProjectList(props) {
    var proj_list = projs.map((proj) => <li> {proj} </li>);
    return (
        <div>
            <h1> {props.name} </h1>
            <ul> {proj_list} </ul>
        </div>
    );
}

function ProjectPage(props) {
    return;
}

export { ProjectCard, ProjectList, ProjectPage };
