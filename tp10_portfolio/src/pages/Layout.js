import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Componentes/Footer'
import Header from '../Componentes/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />            
    </>
  )
}
