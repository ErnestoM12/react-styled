import React, { useState } from 'react'
import styled from 'styled-components';
import { mainColor, secondaryColor, paddign, getLinearGradient } from './styles'




const Header = styled.header`
${getLinearGradient('20deg', 'red', mainColor)}
text-align:center;
border-radius:0.2em;
color:#fff;
${paddign}
margin:0.3em;
font-size:14px;`


const Button = styled.button`
padding: 0.6em 1.5em;
background:${(props) => props.active ? secondaryColor : mainColor}; 
border-radius: 0.4em;
color:#fff;
border:0;
margin: 0.4em;
opacity: 0.5;
transition:opacity 360ms ease-out;

&:hover{
  opacity: 1;
}

`




const App = () => {

  const [active, setActive] = useState(false)

  const toggle = () => setActive(!active)


  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
      </Header>
      <Button active={active}
        onClick={toggle}
      >
        un boton
      </Button>
      <Button >
        un boton
      </Button>
    </div>
  );
}

export default App;
