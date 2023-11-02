//Que los favoritos se puedan guardar en localStorage, para el caso que al cliente cierra y vuelve a abrir seguir teniendo lo agregado al mismo.
//Poder ver, en el navbar sobre el icono de favoritos, ver con un Badge la cantidad de creaciones agregadas, ej: https://mui.com/material-ui/react-badge/, a traves de React Context.
import React, { createContext, useState, useEffect } from 'react'

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {

  const [favoritos, setFavoritos] = useState([]);
    const cantidadFavoritos = favoritos.length
    useEffect(() => {
        
      if (localStorage.getItem("favoritos") != null) {
        let storage = localStorage.getItem("favoritos")
        setFavoritos(JSON.parse(storage))
      }
      },[])

    const AddFavorito = (fav) => {
     setFavoritos([...favoritos, fav])
     console.log(fav);
     localStorage.setItem("favoritos", JSON.stringify([...favoritos, fav]))
    }
    
    const ResetFavoritos = () => {
      setFavoritos([])
    }

    const EliminarFavorito = (favoritoid) => {
      setFavoritos(
        favoritos.filter((fav) => fav.id !== favoritoid)
      ); 
    };
    
  return (
    <FavoritosContext.Provider
    value={{
      favoritos,
      cantidadFavoritos,
      AddFavorito,
      ResetFavoritos,
      EliminarFavorito
    }}
  >
    {props.children}
  </FavoritosContext.Provider>
  )
}

export default FavoritosProvider;
