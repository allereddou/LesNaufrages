import React from 'react';

import Game from './components/Game';

import './App.css';
import { MazeProvider } from './services/maze';
import { LoginProvider } from './services/login';
import { RoomProvider } from './services/rooms';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <RoomProvider>
          <MazeProvider>
            <Game />
          </MazeProvider>
        </RoomProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
