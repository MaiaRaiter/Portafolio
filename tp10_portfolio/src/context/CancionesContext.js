import React, { createContext, useState, useEffect } from 'react'
import axios from "axios"

export const CancionesContext = createContext();

const CancionesProvider = (props) => {
    const [canciones, SetCanciones] = useState([]);
    useEffect(() => {
        axios
          .get("/Creaciones.json")
          .then((result) => {
            SetCanciones(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
      }, []);
    
    return (
        <CancionesContext.Provider
        value={{
            canciones,
        }}
        >
             {props.children}
        </CancionesContext.Provider>
  )
}
export default CancionesProvider;
