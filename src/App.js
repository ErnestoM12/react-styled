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
font-size:14px;`

const Input = styled.input.attrs(({ placeholder, type }) => {
  return {
    placeholder: placeholder || 'ingresar nombre',
    type: type || 'text',
  }
})`
padding: 1em;
border:1px solid blue;
margin: 1em;

`


const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
      </Header>
      <Input type='date' />
      <Input type='text' />


    </div>
  );
}

export default App;
