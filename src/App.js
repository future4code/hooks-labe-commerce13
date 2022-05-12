import React, { useState } from "react";
import styled from "styled-components";
import Filtro from "./components/filtro/Filtro.jsx";
import Home from "./components/home/Home";
import nave1 from "./components/imagens/nave1.png";
import nave2 from "./components/imagens/nave2.png";
import nave3 from "./components/imagens/nave3.png";
import nave4 from "./components/imagens/nave4.png";
import nave5 from "./components/imagens/nave5.png";
import nave6 from "./components/imagens/nave6.png";


const Buscador = styled.input`
<<<<<<< HEAD
padding: 5px;
=======


padding: 5px;

>>>>>>> 30ed453bfc003400a719fb001f7678078dc67161
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
<<<<<<< HEAD

=======
>>>>>>> 30ed453bfc003400a719fb001f7678078dc67161
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
  {id:1,nome:'Nave Revell U.S.S Voyager',valor:'R$: 3.000,00',img:nave1},
  {id:2,nome:'Nave Tie Figther',valor:'R$: 2.500,00',img:nave2},
  {id:3,nome:'Nave Millennium Falcon',valor:'R$: 6.000,00',img:nave3},
  {id:4,nome:'Nave Marciana',valor:'R$: 8.000,00',img:nave4},
  {id:5,nome:'Onibus Espacial Tesla',valor:'R$: 1.500,00',img:nave5},
  {id:6,nome:'Nave 6',valor:'R$: 2.000,00',img:nave6},
];

<<<<<<< HEAD

=======
>>>>>>> 30ed453bfc003400a719fb001f7678078dc67161
export class App extends React.Component {

  state = {
    minPreco: "",
    maxPreco: "",
<<<<<<< HEAD
  }

  updateMinPreco = (ev) => {
    this.setState({
       minPreco: ev.target.value
    })
 }

 updateMaxPreco = (ev) => {
    this.setState({
       maxPreco: ev.target.value
    })
 }

    render(){
    
         return (
=======
  }  
    filtroMinPreco = (event) => {
      this.setState({
        minPreco: event.target.value
      })
    }

    filtroMaxPreco = (event) => {
      this.setState({
        maxPreco: event.target.value
      })
    }

    render(){
      
    const [busca,setBusca]= useState('');

    const prod = produtos.filter((item)=> item.nome.toLowerCase().includes(busca.toLowerCase()));



      return (
>>>>>>> 30ed453bfc003400a719fb001f7678078dc67161
        
        <div>
          <Cabecalho>
            <a href="app.js">HOME</a>
<<<<<<< HEAD
            <a href=" ">PRODUTOS</a>
=======
            <a href="">PRODUTOS</a>
>>>>>>> 30ed453bfc003400a719fb001f7678078dc67161
            <a href="carrinho.js">CARRINHO</a>
          </Cabecalho>
        
          <Titulo>SPACE JAMSHIPS</Titulo>
        
<<<<<<< HEAD
         
          <Filtro>
            
          </Filtro>
           
      
          <Corpo>
            {produtos.map((item)=>{
=======
          <Buscador type="text" value={busca} onChange={(ev)=>setBusca(ev.target.value)} placeholder="Busca..."/><br/>

          <Filtro
            minPreco={this.state.minPreco}
            filtroMinPreco={this.filtroMinPreco}
            maxPreco={this.state.filtroMaxPreco}
            filtroMaxPreco={this.filtroMaxPreco}
          />
      
          <Corpo>
            {prod.map((item)=>{
>>>>>>> 30ed453bfc003400a719fb001f7678078dc67161
              return <Home key={item.id} imagem={item.img} nome={item.nome}   valor={item.valor} />
            })}
          </Corpo>
        
          <Rodape>&copy; LOJASPACEJAM </Rodape>
        </div>
      
      )};
}

export default App;
