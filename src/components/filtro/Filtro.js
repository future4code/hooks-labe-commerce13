import React from 'react'
import styled from 'styled-components'

export const ContainerFiltro = styled.div`
display:flex;
justify-content: center;
text-align: center;
input{
    width: auto;
    height: auto;
    border-radius:10px;
    margin: 2px;
}
select{
    width: auto;
    height: auto;
    border-radius:10px;
    margin: 2px;
}
option{
    width: auto;
    height: auto;
    border-radius:10px;
    margin: 2px;
}
`

function Filtro (props) {


        return (
            <ContainerFiltro>
                <input 
                    placeholder="Pesquisa"
                    value={props.query}
                    onChange={props.atualizarQuery}
                    />

                <input
                    type="number"
                    placeholder="Preço mínimo"
                    value={props.minPreco}
                    onChange={props.filtroMinPreco}
                />

                <input
                    type="number"
                    placeholder="Preço máximo"
                    value={props.maxPreco}
                    onChange={props.filtroMaxPreco}
                />
                {/* <label for="sort">Ordenar por: </label> */}
                <select 
                    name="sort"
                    value={props.parametroOrdenacao}
                    onChange={props.atualizarParametroOrdenacao}
                >
                    <option  value="">Selecione</option>
                    <option  value="Nome">Nome</option>
                    <option  value="Valor">Valor</option>
                </select>

                <select
                    name="order"
                    value={props.ordem}
                    onChange={props.atualizarOrdem}
                >
                    <option>Selecione</option>
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decrescente</option>
                </select>
            </ContainerFiltro>
    )
        }
export default Filtro

