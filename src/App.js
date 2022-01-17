import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { mainColor, secondaryColor, paddign, getLinearGradient } from './styles'


const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px'
}

const device = {
  mobile: (styles) => {
    return `@media(max-width:${sizes.mobile}){
      ${styles}
    }`
  },
  tablet: (styles) => {
    return `@media(max-width:${sizes.tablet}){
      ${styles}
    }`
  },
  desktop: (styles) => {
    return `@media(max-width:${sizes.desktop}){
      ${styles}
    }`
  },
}


const Header = styled.header`
${getLinearGradient('20deg', secondaryColor, mainColor)}
text-align:center;
border-radius:0.2em;
color:#fff;
${paddign}
margin:0.3em;
font-size:20px;


${device.mobile`
 ${getLinearGradient('20deg', secondaryColor, 'green')}
  font-size:12px;
  h1{
    color:red
  }
`}

${device.tablet`
 ${getLinearGradient('20deg', secondaryColor, 'red')} 
  font-size:18px;
  h1{
    color:black
  }
`}`



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
