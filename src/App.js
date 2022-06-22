
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from  'react-router-dom';
import Inicio from './componentes/Inicio';
import Producto from './componentes/Producto';
import Carrito from './componentes/Carrito';
import NavBarAnime from './NavBar';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<NavBarAnime />} >
      <Route index element = {<Inicio />} /> 
      <Route path='Producto' element = {<Producto/>} />
      <Route path='Carrito' element = {<Carrito />} /> 

        <Route path='*' element = {<Navigate replace to = "/"  />} />

      </Route>
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
