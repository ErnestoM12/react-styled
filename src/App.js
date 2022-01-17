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
${(props) => 'background:' + (props.bg || 'black')}; 
border-radius: 0.1em;
color:#fff;
border:0;
margin: 0.4em;`




const App = () => {

  const [Clicks, setClicks] = useState(0)

  const aumentar = () => setClicks(Clicks + 1)


  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
      </Header>
      <Button
        bg={secondaryColor}
        onClick={aumentar}
      >
        un boton
      </Button>
      <Button>
        un boton
      </Button>
      {Clicks}
    </div>
  );
}

export default App;
