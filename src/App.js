import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { textUpdate } from './actions/textActions'
import { useState } from 'react';

// partes comentadas são do exemplo "Estrutura aplicação React-Redux" - para ver exemplo troque os comandos
// de comentário para o exemplo ativo.

function SecondComponent() {
  const secondText = useSelector((state) => state.value);
  return (
    <>
      <hr />{secondText}<hr />
    </>
  );
}

function App() {

    const text = useSelector((state) => state.value);
    const dispatch = useDispatch();
    const [textStore, settextStore] = useState("");
  
  return (

    <div className='App'>
      <h1> React com Redux, outro exemplo. </h1>
      <input type='text' onChange={(e) => settextStore(e.target.value)} value={textStore} />
      <button onClick={() => dispatch(textUpdate(textStore))}>
        Enviar
      </button>
      <h3>{text}</h3>
      <SecondComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
