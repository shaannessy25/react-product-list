import React from 'react';
import data, { categoriesUnique, categoriesWithCount, categoriesWithName } from './data.js'
import './App.css';

function App() {
  const products = categoriesWithName.map(({name, count}) => {
    return <h1> {name}: {count} </h1>
  })

  // const productButton =  categoriesUnique.map({Array.data)) => {
  //   return <button></button>
  // });
  return (
    <div className="App">
      {/* {productButton} */}
      {products}
    </div>
  );
}

export default App;
