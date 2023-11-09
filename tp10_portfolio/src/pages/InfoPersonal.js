import React from 'react'

export default function InfoPersonal ()  {
  return (
   <>
    <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">{creation.titulo}</span></h1>
          <div className="contenedor">
            <img className="img2"  src='public/images/InfoPersonal.jpg' />
            <ul className="list-group TablaInfo">
              <li className="list-group-item">Nacimiento:{creation.fecha}</li>
              <li className="list-group-item">Género:Femenino</li>
              <li className="list-group-item">Detalles: </li>
            </ul>
          </div>

          <br></br>
          <br></br>
          <center>< div className='FondoGris'>
            <p >{creation.informacion}</p>
          </div> </center>

          <button type="button" className="btn btn-primary btn-lg Columnas botonFav" onClick={() => AddFavorito(creation)}> Agregar a favoritos</button>
          <button type="button" className="btn btn-secondary btn-lg Columnas2 botonDelete" onClick={() => EliminarFavorito(creation.id)}>Quitar de favoritos </button>

        </div>
   </>
  )
}