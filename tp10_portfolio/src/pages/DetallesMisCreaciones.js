//En el detalle de Mis Creaciones, mostrar el detalle de la creación, y la posibilidad de agregar o quitarlo de favoritos. En caso de que no este en favoritos, no mostrar el quitar, caso contrario si.

import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { FavoritosContext } from '../context/FavoritosContext'
import { useParams } from 'react-router-dom';
import { CancionesContext } from '../context/CancionesContext';

export default function DetallesMisCreaciones(props) {
  const { EliminarFavorito }= useContext(FavoritosContext);
  const { AddFavorito }= useContext(FavoritosContext);
  const {id} = useParams();
  const [creation, setCreation] = useState(null);
  const { canciones } = useContext(CancionesContext)
  const CargarCreacion = () => {
    const filtro = canciones.filter(data=>data.id==id);
    if(filtro.length>0)
      setCreation(filtro[0]);    
  }
  useEffect(() => {
    CargarCreacion();
  }, [id,canciones]);



return (
  <>
  {!creation ? (
    <div>loading</div>) : (
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">{creation.titulo}</span></h1>
        <img className="img2" src={creation.imagenes} alt=""/>
        <div className='Columnas'>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => AddFavorito(creation)}> Agregar a favoritos</button>
<button type="button" class="btn btn-secondary btn-lg"  onClick={() => EliminarFavorito(creation.id)}>Quitar de favoritos </button>
</div>
        <br></br> 
        <br></br>
< div className='FondoGris'> 
<p >{creation.informacion}</p>
</div>
<ul class="list-group">
  <li class="list-group-item">Fecha:{creation.fecha}</li>
  <li class="list-group-item">Género:{creation.genero}</li>
  <li class="list-group-item">Detalles:{creation.detalles}</li>
 
</ul>




      </div>  
    )
  }
  </>
)

}