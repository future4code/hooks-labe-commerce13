import React from "react";
import styled from "styled-components";

export const CaixaProduto = styled.div `
border: 1px solid black;
margin 5px;
padding:10px;
border-radius: 10px;
justify-content: center;
background-color:rgba(0, 0, 0, 0.1);
button{
  border-radius:10px;
  border: 1px solid #EA7C01;
  background-color:  #EA7C01;
  color: white;
}`

const Home = (props) => {
  return (
    <div>
      <CaixaProduto>
      <img src={props.imagem} alt="imagem de nave" />
      <p>{props.nome}</p>
      <p>{props.valor}</p>
      <button>ADICIONAR AO CARRINHO</button>
      </CaixaProduto>
    </div>
  );
};
export default Home;
