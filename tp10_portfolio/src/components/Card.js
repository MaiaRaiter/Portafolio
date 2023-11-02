import React, {useContext} from 'react'
import { FavoritosContext } from '../context/FavoritosContext'
<<<<<<< HEAD
import { BiHeart } from 'react-icons/bi'
=======

>>>>>>> ca1c3e720689becd312ed4db9f538bb8c01bbf6a

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
                <BiHeart className='icon-heart' onClick={() => AddFavorito(post)}/>
                <img className="img-fluid" src={post.imagenes} />
                
            </div>
        </div>
    </div>
  )
}
