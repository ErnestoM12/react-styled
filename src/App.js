import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components';
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
opacity: 0.7;
transition:opacity 360ms ease-out;
&:hover{
  opacity: 1;
}`

/** Extender los estilos de un button */
const ButtonSpecial = styled(Button)`
color:gray;
transition: all 300ms ease-out !important;
&:hover{
  transform: scale(1.3) ;
}`

//componente funcional los recibe con el prop clasname
const Move = ({ className }) => {
  const [MouseX, setMouseX] = useState(0)
  const handleMove = (e) => setMouseX(e.clientX)
  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])
  return (
    <div className={className}>
      {MouseX}
    </div>
  )
}

//pasamos los stylosal componte funcional
const MoveStyled = styled(Move)`
background: ${secondaryColor};
font-size: 30px;
height: 150px;
text-align: center;
color:white;`


const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>Hola</h1>
        </div>
      </Header>
      <Button active
      >
        un boton
      </Button>
      <Button >
        un boton
      </Button>

      <ButtonSpecial>
        boton especial
      </ButtonSpecial>

      <MoveStyled />

    </div>
  );
}

export default App;
