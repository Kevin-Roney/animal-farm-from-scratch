import React from 'react';
import './AnimalList';
import Animal from '../Animal/Animal.js';

export default function AnimalList({ animals }) {
  return (
    <main>
      {
        animals.map((animal) =>
          <Animal 
            key={animal.name} 
            name={animal.name}
            type={animal.type}
            says={animal.says}
          />)
      }
    </main>
  );
}
