import React from "react";
import styled from "styled-components";

const Home = (props) => {
  return (
    <div>
      <img src={props.imagem} alt="imagem de nave" />
      <p>{props.nome}</p>
      <p>{props.valor}</p>
      <button>Adicionar ao carrinho</button>
    </div>
  );
};
export default Home;
