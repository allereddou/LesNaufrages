import React from 'react';

import Labyrinth from './components/Labyrinth';

import './App.css';
import { MazeProvider } from './services/maze';
import { LoginProvider } from './services/login';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <MazeProvider>
          <Labyrinth />
        </MazeProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
