import Home from '../src/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Productos from '../src/pages/Productos';
import DetalleProductos from '../src/pages/DetalleProductos';
import Layout from './pages/Layout';
import CarritoProvider from './Context/CarritoContext';

function App() {
  return (
   <>
  <CarritoProvider>
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/InfoPersonal' element={<InfoPersonal />}> </Route>
        <Route path='/MisCreaciones' element={<MisCreaciones />}> </Route>
        <Route path='/DetalleProductos/:id' element={<DetalleProductos />}> </Route>
        <Route path='/Favoritos' element={<Favoritos />}> </Route>
      </Route>
   </Routes>
   </CarritoProvider> 

   
   </>  
  );
}

export default App;
