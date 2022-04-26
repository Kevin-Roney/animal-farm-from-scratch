import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';
import { animals } from '../data';

export default function Main({ zodiacs }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList 
        animals={animals}
      />
    </main>
  );
}
