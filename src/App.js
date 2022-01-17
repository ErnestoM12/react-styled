import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import { mainColor, secondaryColor, paddign, getLinearGradient } from './styles'



const Header = styled.header`
${getLinearGradient('20deg', secondaryColor, mainColor)}
text-align:center;
border-radius:0.2em;
color:#fff;
${paddign}
margin:0.3em;
font-size:20px;
`

const baseStyles = css`
padding: 1em 2em;
margin: 1em;
border: ${props => `2px solid ${props.borderColor}`};
`

const Button = styled.button`
${baseStyles}`




const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
      </Header>
      <Button>
        Dispara
      </Button>
      <Button borderColor='green'>
        otro boton
      </Button>
    </div>
  );
}

export default App;
