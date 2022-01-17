import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { mainColor, secondaryColor, paddign, getLinearGradient } from './styles'


const Header = styled.header`
${getLinearGradient('20deg', secondaryColor, mainColor)}
text-align:center;
border-radius:0.2em;
color:#fff;
${paddign}
margin:0.3em;
font-size:20px;

@media(max-width:700px){
  ${getLinearGradient('20deg', secondaryColor, 'red')} 
  font-size:12px;
  h1{
    color:black

  }

}`



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
