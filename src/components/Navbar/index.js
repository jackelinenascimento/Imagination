import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="Logo do site Imagination" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Página Inicial</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/criticas">Críticas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/personagens">Personagens</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/podcasts">Podcasts</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar