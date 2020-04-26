import React from 'react'

import './styles.css'

import foto1 from '../../assets/images/home/foto1.jpg'
import foto3 from '../../assets/images/home/foto3.jpg'
import foto4 from '../../assets/images/home/foto4.jpg'
import foto6 from '../../assets/images/home/foto6.jpg'

const Home = () => {
    return (
        <main>
            <section className="container d-flex justify-content-center py-3">
                <section className="w-75 text-center border-top border-bottom py-3">
                    <h1 className="py-3">Imaginação!</h1>
                    <p>Significado da Imaginação: ( Do latim: imaginatĭo, ōnis 'imagem, representação, visão; pensamento,
                    ideia; ilusão').</p>
                    <p>Ficção é o termo usado para designar uma narrativa imaginária, irreal, ou para redefinir obras (de
                    arte) criadas a partir da imaginação. Em contraste, a não-ficção reivindica ser uma narrativa
                    factual sobre a realidade. Obras ficcionais podem ser parcialmente baseadas em fatos, mas sempre
                    contêm algum conteúdo imaginário.</p>
                    <p>A Imaginação é algo mágico, que move os seres humanos, a capacidade de com a mente, imaginar coisas,
                    realizar, sonhar e o mais importante tirar esses sonhos da mente para a realidade. Se não fosse a
                    imaginação não teríamos criado o automóvel, o avião, foguetes, celulares e os computadores.</p>
                    <p>Mas mesmo com todos os exemplos modernos de imaginação, nós a subestimamos, achamos que é tolice
                    imaginar coisas novas e relegamos a imaginação para as crianças e aos sonhadores de plantão.</p>
                    <img className="w-100 py-3" src={foto1} alt="" />
                        <p>Na infância estamos no máximo de nossa capacidade de imaginar sem regras, sem complexos e sem
                        vergonha: criamos diversão com um lápis que vira uma espada, uma toalha que é uma capa, uma caixa
                        que vira um carro ou tanque de guerra. Ao longo do tempo vamos perdendo essa capacidade de imaginar,
                    contar algo que passa pela mente e que ainda conseguirmos nos divertir com isso.</p>
                        <img className="w-100 py-3" src={foto3} alt="" /> 
                            <p>Para entrar em contato novamente com a criança interior e com esse poder incrível que é a imaginação
                            vou homenagear e analisar produções da ficção, seja um jogador que pode ser qualquer personagem dos
                            anos 80 e 90, um Rider só de passagem, um pirata com poderes de outros guerreiros , marionetes dos
                            anos 60 em missão de resgate ou jovens que viajam pela linha do arco íris usando o poder da
                    imagination!!!</p>
                            <img className="w-100 py-3" src={foto4} alt="" />
                                <p>Vamos entrar em vários universos e perceber parâmetros e as mensagens que os autores quiseram passar
                                mesmo que inconscientemente e despertaram emoções e impressões nos espectadores. Vou abordar com
                                olhar tanto emocional quanto critico e filosófico enredos de filmes e séries. Vamos juntos embarcar
                    nesse trem da Imaginação!!</p>
                                <img className="w-100 py-3" src={foto6} alt=""/>
            </section>
        </section>
    </main>
    )
}

export default Home