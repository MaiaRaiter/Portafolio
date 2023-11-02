import React, {useContext} from 'react'
import { FavoritosContext } from '../context/FavoritosContext'
import { BiSolidHeart } from 'react-icons/bi'

export default function Card({post}) {
  const { EliminarFavorito }= useContext(FavoritosContext);
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
            <div className="d-flex align-items-center">
                <div className="p-5">
                
                    <h2 className="fw-bolder"> {post.titulo}</h2>
                    <p>{post.descripcion}</p>
                    <p>{post.fecha}</p>
                </div>
                <BiSolidHeart className='icon-heart' onClick={() => EliminarFavorito(post.id)}/>
                <img className="img-fluid" src={post.imagenes} />
            </div>
        </div>
    </div>
  )
}