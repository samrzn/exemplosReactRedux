import React from 'react';
import './App.css';
import Header from './components/header';
import Rodape from './components/footer';
import PageTitle from './components/pageTitle';
import ListProducts from './components/listProducts';
import Categories from './components/categories';

function App() {
  return (
    <div>
      <Header />
      <PageTitle text="Produtos" />
      <Categories />
      <ListProducts />
      <Rodape />
    </div>
  );
}

export default App;
