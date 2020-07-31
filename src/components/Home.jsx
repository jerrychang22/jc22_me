import React from 'react';
import styled, { css } from 'styled-components';

import { lerp } from '../utils/lerp.js';
import { maxBlackout } from '../utils/constants.js';
import JCPNG from '../misc/JC2.png';

//Home page
function Home(props){
    return (<div>
                <WhoImage>
                    <WhoBlock shade={lerp(0, maxBlackout, props.height)}>
                        <WhoText>
                            <h2> Who am I? </h2>
                            <h3>
                                My name is Jerry Chang
                            </h3>
                            <p>
                                I'm a mechanical engineering student who tries to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper pellentesque odio, a vestibulum est vestibulum in. Nullam metus neque, aliquam vel pharetra ac, convallis sit amet ligula. Aliquam ex libero, fringilla sit amet arcu nec, mattis scelerisque nunc. Sed aliquet sollicitudin est, ac viverra velit commodo sit amet. Vestibulum blandit dapibus massa, quis facilisis leo imperdiet eget. Vivamus metus ex, posuere tincidunt felis id, scelerisque finibus urna. Phasellus commodo elit sapien, vitae vestibulum tortor rutrum at. Nam iaculis nisi et ex lacinia, a dictum justo consectetur. Donec id rutrum eros. Donec aliquet velit non imperdiet varius. Mauris eget turpis vel sem commodo tincidunt. Nunc placerat venenatis tortor, eu pharetra elit molestie fringilla. Fusce sit amet ornare nunc. Suspendisse feugiat, libero ut posuere pretium, lacus urna blandit justo, eu bibendum ipsum mi ac dolor. 
                            </p>
                        </WhoText>
                    </WhoBlock>
                </WhoImage>
                <div style={{height: 100 + 'vh'}}>
                    Test
                </div>
            Hello world
            </div>);
}

const WhoImage = styled.div`
    background-image: url('${JCPNG}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

const WhoBlock = styled.div`
    background-image: linear-gradient(to right, rgba(34,34,34,${props => props.shade}), rgba(34, 34, 34, 0));
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`;

const WhoText = styled.div`
    margin-left: 5%;
    width: 40%;
    height: 40%;
    color: white;
    font-size: 2em;
`;

export { Home };
