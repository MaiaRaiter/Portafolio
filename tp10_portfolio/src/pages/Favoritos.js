import React, { useState, useContext } from 'react'
import CardFavoritos from '../components/CardFavoritos';
import { FavoritosContext } from '../context/FavoritosContext'

export default function Favoritos() {

  const [post, setPost] = useState([]);
  const {favoritos}= useContext(FavoritosContext);
  return (
    <div className="container px-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Favoritos</span></h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {favoritos.map((item) => (
            <CardFavoritos post={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

/*
 {carrito.map((product, index) => (
                <div key={index}>
                <tr >
                <th scope="row" >{index+1}</th>
                <th scope="col">
                <td><img src={product.thumbnail} className="ImagenTabla"></img></td>
                </th>
                
                <td>{product.title}</td>
                <td>${product.price}</td>
                </tr>
                <td>
                  <p> <div  className="main-border-button"><button onClick={() => EliminarProduct(product.id)} className="btn btn-danger">Eliminar Producto</button></div></p>
                </td>
                </div>
      ))}*/