import React from 'react';
import styled from 'styled-components';

export const Cabecalho = styled.header `
width: auto;
background-color: #8F1EAE;
color: #E52E26;
display: flex;
flex-direction: row;
justify-content: space-around;
`

export const Corpo = styled.div`
background-color: #F0420D;
height: 100vh;
`
function App() {
  return (
    <div>
      <Cabecalho>
          <a>Home</a>
          <a>Produtos</a>
          <a>Carrinho</a>
        </Cabecalho>
        <Corpo>aaaaaaaaaaaaaaaaaaaaaaaaaa</Corpo>
    </div>
  );
}

export default App;
