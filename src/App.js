import React from "react";
import styled from "styled-components";
import Home from "./components/home/Home";
import nave1 from "./components/imagens/nave1.png";
import nave2 from "./components/imagens/nave2.png";
import nave3 from "./components/imagens/nave3.png";
import nave4 from "./components/imagens/nave4.png";
import nave5 from "./components/imagens/nave5.png";
import nave6 from "./components/imagens/nave6.png";

export const Cabecalho = styled.header`
  width: auto;
  background-color: #8f1eae;
  color: #e52e26;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Titulo = styled.div`
  background-color: #f0420d;
  font-size: xx-large;
  height: 10vh;
  text-align: center;
`;

export const Corpo = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: #f0420d;
  img {
    width: 300px;
    height: 300px;
    align-items: space-between;
    border-style: solid;
    border-color: #8f1eae;
  }
`;

function App() {
  return (
    <div>
      <Cabecalho>
        <a>Home</a>
        <a>Produtos</a>
        <a>Carrinho</a>
      </Cabecalho>
      <Titulo>Space Jamships</Titulo>
      <Corpo>
        <Home imagem={nave1} nome="Nave 1" valor="R$3000" />
        <Home imagem={nave2} nome="Nave 2" valor="R$2500" />
        <Home imagem={nave3} nome="Nave 3" valor="R$6000" />
        <Home imagem={nave4} nome="Nave 4" valor="R$8000" />
        <Home imagem={nave5} nome="Nave 5" valor="R$1500" />
        <Home imagem={nave6} nome="Nave 6" valor="R$2000" />
      </Corpo>
    </div>
  );
}

export default App;
