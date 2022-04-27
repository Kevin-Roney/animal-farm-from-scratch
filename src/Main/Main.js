import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';
import { animals } from '../data';

//eslint-disable-next-line
export default function Main({ animal }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList 
        animal={animals}
      />
    </main>
  );
}
