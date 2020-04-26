import React from 'react'
import { Card, Text } from '../../components'

import './styles.css'

import cards from './data-cards.ts'
import text from './data-text.ts'

const Criticas = () => {
    return (
        <main>
            <section className="container d-flex flex-column align-items-center py-3">
                <section className="w-75 text-center border-top border-bottom py-3">
                    <h3 className="py-3">Aquela crítica construtiva... ou pelo menos o que achamos do conteúdo!</h3>
                    <h5>Confere aí!</h5>
                </section>
                <section className="w-75 py-3 section-cards">
                   <Card list={cards}/>
                </section>
                <section className="w-75 py-3 border-top border-bottom">
                    <Text list={text}/>
                </section>
            </section>
        </main>
    )
}

export default Criticas