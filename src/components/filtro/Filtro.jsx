import React from 'react'
import styled from 'styled-components'

export const ContainerFiltro = styled.div`
display:flex;

`

class Filtro extends React.Component {

    render () {
        return (
            <ContainerFiltro>
                <h3>Filtro</h3>

                <label>Valor mínimo:</label>
                <input
                    type={"number"}
                    value={this.props.minPreco}
                    onChange={this.props.filtroMinPreco}
                />

                <label>Valor máximo:</label>
                <input
                    type={"number"}
                    value={this.props.maxPreco}
                    onChange={this.props.filtroMaxPreco}
                />
            </ContainerFiltro>
    )}

}

export default Filtro;