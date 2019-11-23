import React from 'react';

import Game from './components/Game';

import './App.css';
import { MazeProvider } from './services/maze';
import { LoginProvider } from './services/login';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <MazeProvider>
          <Game />
        </MazeProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
