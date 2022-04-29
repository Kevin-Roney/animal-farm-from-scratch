import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal.js';
import backgroundImg from '../background.png';

export default function AnimalList({ animal }) {
  return (
    <div className='Background' style={{ backgroundImage: `url(${backgroundImg})`, position:'relative' }}>
      {
        animal.map((animal) =>
          <Animal className="animal"
            key={animal.name} 
            name={animal.name}
            type={animal.type}
            says={animal.says}
            top={animal.top} 
            left={animal.left}
          />)
      }
    </div>
  );
}
