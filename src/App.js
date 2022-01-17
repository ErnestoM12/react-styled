import React from 'react'
import styled from 'styled-components';
import { mainColor, secondaryColor, paddign, getLinearGradient } from './styles'




const Header = styled.header`
${getLinearGradient('20deg', 'red', mainColor)}
text-align:center;
border-radius:0.2em;
color:#fff;
${paddign}
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
