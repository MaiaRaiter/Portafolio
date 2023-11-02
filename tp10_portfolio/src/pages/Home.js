// Listo: En la Home, deberemos ver 6 creaciones, que podrian ser los "más destacados", elegidas por ustedes, 
//Pendiente: y que pueda hacer click en alguno, y me permita agregarlo a favoritos.

import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from '../components/Card';

export default function Home() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("Creaciones.json")
      .then((result) => {
        setPost(result.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container px-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Destacados</span></h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {post.slice(0, 6).map(item => (
            <Card post={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
