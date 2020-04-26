import React from 'react'

import './styles.css'

const Text = (props) => {

    const { list } = props

    return (
        list.map(text => (

            <div key={text.key} id={text.id} className="text-center">
                <h3>{text.titulo}</h3>
                <p>{text.paragrafo1}</p>
                <p>{text.paragrafo2}</p>
                <p>{text.paragrafo3}</p>
                <img className="w-100 mb-3" src={text.image1} alt={text.imagemDescricao1} />
                <p>{text.paragrafo4}</p>
                <p>{text.paragrafo5}</p>
                <p>{text.paragrafo6}</p>
                <img className="w-100 mb-3" src={text.image2} alt={text.imagemDescricao2} />
                <p>{text.paragrafo7}</p>
                <p>{text.paragrafo8}</p>
                <p>{text.paragrafo9}</p>
                <img className="w-100 mb-3" src={text.image3} alt={text.imagemDescricao3} />
                <p>{text.paragrafo10}</p>
                <p>{text.paragrafo11}</p>
                <p>{text.paragrafo12}</p>
                <img className="w-100 mb-3" src={text.image4} alt={text.imagemDescricao4} />
                <p>{text.paragrafo13}</p>
                <p>{text.paragrafo14}</p>
                <p>{text.paragrafo15}</p>
                <img className="w-100 mb-3" src={text.image5} alt={text.imagemDescricao5} />
            </div>
        ))
    )
}

export default Text