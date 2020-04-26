import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="page-footer font-small bg-light pt-4">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <img src={logo} alt="Logo da página Imagination" />
                        <p>O caminho para os sonhos!</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-2 mx-auto">
                        <h6>MAPA DO SITE</h6>
                        <ul className="list-unstyled">
                            <li>

                                <Link to="/">Página Inicial</Link>
                            </li>
                            <li>
                                <Link to="/criticas">Críticas</Link>
                            </li>
                            <li>
                                <Link to="/personagens">Personagens</Link>
                            </li>
                            <li>
                                <Link to="/podcasts">Podcasts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled list-inline text-center">
                <p>Somos sociais!</p>
                <li className="list-inline-item">
                    <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/imaginationoficialsp/" className="btn-floating btn-fb mx-1">
                        <i className="fab fa-facebook-f"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a target="_blank" rel="noreferrer noopener" href="https://instagram.com/imaginationsonhar?igshid=1411440z90x1b" className="btn-floating btn-tw mx-1">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/imaginationofi1" className="btn-floating btn-li mx-1">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li >
                <li className="list-inline-item">
                    <a target="_blank" rel="noreferrer noopener" href="mailto: imaginationoficialsp@gmail.com" className="btn-floating btn-dribbble mx-1">
                        <i className="fas fa-envelope-square"></i>
                    </a>
                </li >
            </ul >
            <div className="footer-copyright text-center py-3 bg-dark text-white">© 2020 Copyright: Imagination
            </div>
        </footer >
    )
}

export default Footer