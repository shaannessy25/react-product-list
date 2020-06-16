import React, { useState } from 'react';
import './App.css';

import List from './components/ListProduct';
import Button from "./components/Button";

import { categoriesUnique, categoriesWithCount } from './data.js';



function App() {
  const [ currentCategory, setCategory ] = useState('All')

  function getCategory(newValue) {
    setCategory(newValue);
  }

  function resetState() {
    setCategory('All');
  }

  const product =  categoriesUnique.map((category, item) => {
    const count = categoriesWithCount
    return (
      <Button
        category={category}
        id={category}
        key={item}
        value={category}
        count={count[category]}
        onClick={() => getCategory(category)}
      />
    )
  });

  const total = categoriesUnique.reduce( (acc, category) => { 
    return acc + categoriesWithCount[category]
  }, 0);

  return (
    <div className="container">
      <div className='categories'>
        <button id="All" className="category" value="All" onClick={resetState}>
          <span className="text-center">ALL CATEGORIES </span>
          <div className="badge">
            <span className="text-center">{total}</span>
          </div>
        </button>
        {product}
      </div>
      <div className="ProductList">
        <List currentCategory={currentCategory} />  
      </div>
    </div>
  )
}

export default App;
