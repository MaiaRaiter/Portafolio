import React, { useContext } from 'react'
import { FavoritosContext } from '../context/FavoritosContext'
import { BiHeart } from 'react-icons/bi'
import { BiSolidHeart } from 'react-icons/bi'

export default function Card({ post }) {
  const { EliminarFavorito } = useContext(FavoritosContext);
  const { AddFavorito } = useContext(FavoritosContext);
  const {  isFavorite } = useContext(FavoritosContext);    

  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div className="card-body p-0">
        <div className="d-flex align-items-center">
          <div className="p-5">

            <h2 className="fw-bolder"> {post.titulo}</h2>
            <p>{post.descripcion}</p>
            <p>{post.fecha}</p>
          </div>

          {isFavorite(post.id) ? (
            <BiSolidHeart className='icon-heart' onClick={() => EliminarFavorito(post.id)} />
          ) : (
            <BiHeart className='icon-heart' onClick={() => AddFavorito(post)} />
          )}
          <img className="img-fluid" src={post.imagenes} />

        </div>
      </div>
    </div>
  )
}
