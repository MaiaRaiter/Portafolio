import React from 'react'

export default function Card({post}) {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
            <div className="d-flex align-items-center">
                <div className="p-5">
                
                    <h2 className="fw-bolder"> {post.titulo}</h2>
                    <p>{post.descripcion}</p>
                    <p>{post.fecha}</p>
                </div>
                <img className="img-fluid" src={post.imagenes} alt="..."/>
            </div>
        </div>
    </div>
  )
}
