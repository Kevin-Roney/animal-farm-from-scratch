import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal.js';

export default function AnimalList({ animal }) {
  return (
    <main>
      {
        animal.map((animal) =>
          <Animal className="animal"
            key={animal.name} 
            style={({ marginLeft:`${animal.left}`, marginTop:`${animal.top}` })} 
            name={animal.name}
            type={animal.type}
            says={animal.says}
          />)
      }
    </main>
  );
}
