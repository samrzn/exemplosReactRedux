import React from 'react';
import './App.css';
import Header from './components/header';
import Rodape from './components/footer';
import PageTitle from './components/pageTitle';

function App() {
  return (
    <div>
      <Header />
      <PageTitle text="Produtos" />
      <Rodape />
    </div>
  );
}

export default App;
