import React from 'react';
import './App.css';
import Menu from './components/menu';
import Rodape from './components/footer';
import Title from './components/tableProducts';
import ListProducts from './components/listProducts';
import Categories from './components/categories';

function App() {
  return (
    <div className='container-fluid'>
      <Menu />
      <Title text="Produtos" />
      <Categories />
      <ListProducts />
      <Rodape />
    </div>
  );
}

export default App;
