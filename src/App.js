import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import { mainColor, secondaryColor, paddign, getLinearGradient } from './styles'



const anima = keyframes`
from{
  ${getLinearGradient('20deg', secondaryColor, mainColor)}
  transform: scale(1);
}

to{
  ${getLinearGradient('20deg', secondaryColor, 'white')}
  transform: scale(0.8);

}`


const Header = styled.header`
${getLinearGradient('20deg', secondaryColor, mainColor)}
text-align:center;
border-radius:0.2em;
color:#fff;
${paddign}
margin:0.3em;
font-size:20px;
animation:${anima} 1500ms ease-in-out infinite;
animation-direction: alternate;
`
const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
      </Header>
    </div>
  );
}

export default App;
