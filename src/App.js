import React from 'react'
import styled from 'styled-components';
import { mainColor, secondaryColor } from './colors'

//forma nativa
//import './styles.css'



const Header = styled.header`
/* forma nativa background:linear-gradient(20deg, var(--secondaryColor), var(--mainColor)); */
 background:linear-gradient(20deg, ${secondaryColor}, ${mainColor}); 
text-align:center;
border-radius:0.2em;
color:#fff;
padding:0.3em;
margin:0.3em;
font-size:14px;
`

const SubTitle = styled.h2`
color:${secondaryColor};
`


const App = () => {
  return (
    <div>
      <Header>
        <h1>Hola</h1>
      </Header>
      <SubTitle>
        Ejemplo de subtitulo
      </SubTitle>
    </div>
  );
}

export default App;
