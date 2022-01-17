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
transition: all 350ms ease-in-out;
opacity: 0.6;
/**
*agregando pseudo clases 
*/
&:hover {
opacity: 1;
  
h1{
  color:black
}

}

div{
  background:red


}
h1{
color: white;
}

.big {
  font-size: 50px;
}

`

const SubTitle = styled.h2`
color:${secondaryColor};`



const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
        <span className='big'>
          Ejemplo
        </span>
      </Header>
      <SubTitle>
        Ejemplo de subtitulo
      </SubTitle>
    </div>
  );
}

export default App;
