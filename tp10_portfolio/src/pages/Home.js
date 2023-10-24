// En la Home, deberemos ver 6 creaciones, que podrian ser los "más destacados", elegidas por ustedes, y que pueda hacer click en alguno, y me permita agregarlo a favoritos.

import React from 'react'
import axios from "axios"

export default function Home ()  {
    const axios = require('axios');

    axios.get('../public/Creaciones.json')

    .then((result) => {
      if (result.data.status === 1) {
        //setPost(result.data.product]);
        console.log(result.data.brands);
      } else {
        // no se encontro
        console.log('No se encontro');
      }

    })
    .catch((error) => {
      //setPost(error);
      console.log("Error");
    });


  return (
    <div class="container px-5 mb-5">
    <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Favoritos</span></h1>
    </div>
    <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-8">
            <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div class="card-body p-0">
                    <div class="d-flex align-items-center">
                        <div class="p-5">
                        
                            <h2 class="fw-bolder">Project Name 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                        </div>
                        <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
