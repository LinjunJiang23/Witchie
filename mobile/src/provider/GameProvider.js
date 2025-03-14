import { createContext, useContext, useMemo } from 'react';
import { GameEngine } from "../engine/GameEngine";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const engine = useMemo(()=> new GameEngine(), []);

  return (
    <GameContext.Provider value={{ engine }}>
      {children}
    </GameContext.Provider>
  );

};

export const useGame = () => useContext(GameContext);