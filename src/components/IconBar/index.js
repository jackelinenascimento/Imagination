import React from 'react'
import './styles.css'

const IconBar = () => {
    return (
        <div className="icon-bar">
            <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/imaginationoficialsp/" className="facebook"><i className="fab fa-facebook-f"></i></a>
            <a target="_blank" rel="noreferrer noopener" href="https://instagram.com/imaginationsonhar?igshid=1411440z90x1b" className="instagram"><i className="fab fa-instagram"></i></a>
            <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/imaginationofi1" className="twitter"><i className="fab fa-twitter"></i></a>
            <a target="_blank" rel="noreferrer noopener" href="mailto:imaginationoficialsp@gmail.com" className="email"><i className="fas fa-envelope-square"></i></a>
        </div >
    )
}

export default IconBar