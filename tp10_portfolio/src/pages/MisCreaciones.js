//Las creaciones se deben obtener mediante axios pegandole a un JSON de objetos guardado en un archivo local, donde cada uno tenga info al respecto: titulo, descripcion, imagenes, fecha, url, entre otros.
//En la vista de Mis Creaciones, utilizando los mismos componentes, mostrar todas las creaciones que haya.

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { CardMisCreaciones } from '../components/CardMisCreaciones'

export default function MisCreaciones() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("Creaciones.json")
      .then((result) => {
        setPost(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container px-5 mb-5">
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Creaciones</span></h1>
    </div>
    <div className="row gx-5 justify-content-center">
      <div className="col-lg-11 col-xl-9 col-xxl-8">

        {post.map(item => (
          <CardMisCreaciones post={item} />
        ))}

    
      </div>
       
    </div>
  </div>
  )
}