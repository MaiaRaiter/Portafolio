import React, {useContext } from 'react'
import { Link } from "react-router-dom";
import { FavoritosContext } from '../context/FavoritosContext'

export default function Header() {
  const { cantidadFavoritos } = useContext(FavoritosContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <Link to="/"> <li className="nav-item"><a className="nav-link" >Home</a></li></Link>
            <Link to="/InfoPersonal"> <li className="nav-item"><a className="nav-link" >Info</a></li></Link>
            <Link to="/MisCreaciones"> <li className="nav-item"><a className="nav-link" >Mis Creaciones</a></li></Link>
            <Link to="/Favoritos"> <li className="nav-item"><a className="nav-link" >Favoritos <span class="badge text-bg-secondary">{cantidadFavoritos}</span></a></li></Link>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

