import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'


import Card from './Card'

function Sorteio(props){
    const sorteado = parseInt(Math.random() * (props.max-props.min) + props.min)
    return(
        <Card title='Sortei de um Números' purple>
            <div>
                <span>
                    <span>Sorteio</span>
                    <strong>{sorteado}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)