import React from 'react'

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-success p-5">
                    <div className="container-fluid">
                        <img src="https://cdn-icons-png.flaticon.com/512/686/686104.png" alt='coffe' 
                        style={{width: '100px', height: '80px'}} className='m-2'></img>
                        <a to='/' className="navbar-brand" href="/">
                            <strong>Portfolio</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About me</a>
                                </li>
                                <br />
                                <li className="nav-item">
                                    <a className="nav-link" href="/projects">Proyectos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
