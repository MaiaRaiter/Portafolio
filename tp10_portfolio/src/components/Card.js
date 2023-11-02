import React, {useContext} from 'react'
import { FavoritosContext } from '../context/FavoritosContext'
import { IoHeartOutline } from "react-icons/io5";

export default function Card({post}) {
  const { AddFavorito }= useContext(FavoritosContext);
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
            <div className="d-flex align-items-center">
                <div className="p-5">
                
                    <h2 className="fw-bolder"> {post.titulo}</h2>
                    <p>{post.descripcion}</p>
                    <p>{post.fecha}</p>
                </div>
                <img className="img-fluid" src={post.imagenes} />
                <div  className="IoHeartOutline"><button onClick={() => AddFavorito(post)} className="IoHeartOutline">Add Favorito</button></div>
            </div>
        </div>
    </div>
  )
}