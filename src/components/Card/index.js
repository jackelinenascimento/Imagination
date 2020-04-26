import React from 'react'

import './styles.css'

const Card = (props) => {

    const { list } = props

    return (
        list.map(card => (

            <div key={card.key} className="card card-size m-3 text-center">
                    <img className="card-img-top" src={card.imagemCard} alt="Imagem 01" />
                    <div className="card-body">
                        <h5 className="card-title">{card.tituloCard}</h5>
                        <p className="card-text">{card.textoCard}</p>
                        <a href={card.idLink} className="btn btn-primary">Go!</a>
                    </div>
            </div>
        ))
    )
}

export default Card