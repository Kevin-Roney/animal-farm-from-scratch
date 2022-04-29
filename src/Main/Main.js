import React from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';
import { animals } from '../data';

//eslint-disable-next-line
export default function Main({animal}) {
  return (
    <main>
      <AnimalList animal={animals}
      />
    </main>
  );
}
