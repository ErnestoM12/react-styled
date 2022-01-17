import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
background:linear-gradient(20deg, #db7093, #daa357);
text-align:center;
border-radius:0.2em;
color:#fff;
padding:0.3em;
margin:0.3em;
font-size:14px;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>Hola</h1>
      </Header>
    </div>
  );
}

export default App;
