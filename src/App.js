import React, { useState } from "react";
import styled from "styled-components";
import Filtro from "./components/filtro/Filtro.js";
import Home from "./components/home/Home";
import nave1 from "./components/imagens/nave1.png";
import nave2 from "./components/imagens/nave2.png";
import nave3 from "./components/imagens/nave3.png";
import nave4 from "./components/imagens/nave4.png";
import nave5 from "./components/imagens/nave5.png";
import nave6 from "./components/imagens/nave6.png";
import nave7 from "./components/imagens/nave7.jpg";
import nave8 from "./components/imagens/nave8.jpg";
import nave9 from "./components/imagens/nave9.jpeg";




const Buscador = styled.div`
 background-color: #EA7C01;
  color: white;
`


export const Cabecalho = styled.header`
  width: auto;
  background-color: #001E5F;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  padding:5px;
  font-size: 10px;
  font-weight: bolder;
`;

export const Rodape = styled.footer`
  width: auto;
  background-color: #001E5F;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  padding:5px;
  font-size: 10px;
  font-weight: bolder;
`;

export const Titulo = styled.div`
  background-color: #EA7C01;
  color: white;
  font-size: 50px;
  height: 10vh;
  text-align: center;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  text-shadow: 2px 2px #8f1eae;
`;

export const Corpo = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-image: linear-gradient(#EA7C01,#DA1F34,#8800C2);
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 200px;
    height: 200px;
    align-items: space-between;
    border-style: solid;
    border-color: #EA7C01;
    border-radius: 10px;
  }
`;

const produtos = [
  {id:1,nome:'Nave Revell U.S.S Voyager',valor:3000,img:nave1},
  {id:2,nome:'Nave Tie Figther',valor:2500,img:nave2},
  {id:3,nome:'Nave Millennium Falcon',valor:6000,img:nave3},
  {id:4,nome:'Nave Marciana',valor:8000,img:nave4},
  {id:5,nome:'Ônibus Espacial Tesla',valor:1500,img:nave5},
  {id:6,nome:'Ônibus Espacial SpaceX S11',valor:2000,img:nave6},
  {id:7,nome:'Nave Vegana',valor:1000,img:nave8},
  {id:8,nome:'Disco Voador MIB',valor:2000,img:nave7},
  {id:9,nome:'Nave Rick and Morty',valor:10000,img:nave9},

];


export class App extends React.Component {

  state = {
    minPreco: "",
    maxPreco: "",
    query: "",
    ordem: 1,
    parametroOrdenacao: "",
    //produto: produtos
  }
  atualizarQuery = (ev) => {
    this.setState({
       query: ev.target.value
    })
 }

 filtroMinPreco = (ev) => {
    this.setState({
       minPreco: ev.target.value
    })
 }

 filtroMaxPreco = (ev) => {
    this.setState({
       maxPreco: ev.target.value
    })
 }
 atualizarParametroOrdenacao = (ev) => {
   this.setState({
     parametroOrdenacao: ev.target.value
   })
 }

 atualizarOrdem = (ev) => {
   this.setState({ordem: ev.target.value})
 }

    render(){
    
         return (
        
        <div>
          <Cabecalho>
            <a href="app.js">HOME</a>
            <a href=" ">PRODUTOS</a>
            <a href="carrinho.js">CARRINHO</a>
          </Cabecalho>
        
          <Titulo>SPACE JAMSHIPS</Titulo>
        
          <Buscador>
          <Filtro
          query={this.state.query}
          minPreco={this.state.minPreco}
          maxPreco={this.state.maxPreco}
          parametroOrdenacao={this.parametroOrdenacao}
          atualizarQuery={(ev) => this.atualizarQuery(ev)}
          atualizarOrdem={this.atualizarOrdem}
          filtroMaxPreco={(ev) => this.filtroMaxPreco(ev)}
          filtroMinPreco={(ev) => this.filtroMinPreco(ev)}         
          />
          </Buscador>
             
      
          <Corpo>
            {produtos
            .filter (item => {
              return item.nome.toLowerCase(produtos).includes(this.state.query.toLocaleLowerCase())
            })
            .filter (item => {
              return this.state.minPreco === "" || item.valor >= this.state.minPreco
            })
            .filter (item => {
              return this.state.maxPreco === "" || item.valor <= this.state.maxPreco
            })
            // .sort((itemAtual, proximoItem) => {
            //   // switch (this.state.parametroOrdenacao) {
            //   //   case "Nome":
            //   //     return this.state.ordem * itemAtual.nome.localeCompare(proximoItem.nome)
            //   //   case "Valor":
            //   //     if ("Crescente")
            //   //     case 'crescente':
            //   //       return itemAtual.preco - proximoItem.preco
            //   //     case 'decrescente':
            //   //       return proximoItem.preco - itemAtual.preco
            //   //     default:
            //   //       return true
            //   }
            // })
        
          .map(item=>{
              return <Home key={item.id} imagem={item.img} nome={item.nome}  valor={item.valor} />
            })}
          </Corpo>
        
          <Rodape>&copy; LOJASPACEJAM </Rodape>
        </div>
      
      )};
}

export default App;
