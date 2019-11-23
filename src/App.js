import React from 'react';

import Labyrinth from './components/Labyrinth';

import './App.css';
import { MazeProvider } from './services/maze';

function App() {
  return (
    <div className="App">
      <MazeProvider>
        <Labyrinth />
      </MazeProvider>
    </div>
  );
}

export default App;
