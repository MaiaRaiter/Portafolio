import Home from '../src/pages/Home';
import { Route, Routes } from 'react-router-dom';
import InfoPersonal from '../src/pages/InfoPersonal';
import DetallesMisCreaciones from '../src/pages/DetallesMisCreaciones';
import MisCreaciones from '../src/pages/MisCreaciones';
import Favoritos from '../src/pages/Favoritos';
import Layout from './pages/Layout';


function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/InfoPersonal' element={<InfoPersonal />}> </Route>
        <Route path='/MisCreaciones' element={<MisCreaciones />}> </Route>
        <Route path='/DetallesMisCreaciones/:id' element={<DetallesMisCreaciones />}> </Route>
        <Route path='/Favoritos' element={<Favoritos />}> </Route>
      </Route>
   </Routes>

   </>  
  );
}

export default App;
