import React, { FC, createContext, useContext, useCallback, useState, useMemo, ReactNode } from 'react';
import GameRules, { GameMode } from '../models/game-rules';
import Scale from '../models/scale';
import { modeScales, fullScales } from '../data/scaleDefinitions';

interface GameRulesContextProps {
  gameRules: GameRules;
  scaleDisplay: string;
  guessing: boolean;
  currentKey: Scale;
  setMode: (mode: GameMode) => void;
  resetGame: () => void;
  generateKey: () => void;
}

const GameRulesContext = createContext<GameRulesContextProps | null>(null);

export const useGameRules = () => {
  const gameRulesContext = useContext(GameRulesContext);

  if (!gameRulesContext)
    throw new Error(
      'useGameRules has to be used within <GameRulesProvider>',
    );

  return gameRulesContext;
};

interface GameRulesProviderProps {
  children: ReactNode;
}

const dummyScale: Scale = {
  name: '',
  notes: [],
};

const GameRulesProvider: FC<GameRulesProviderProps> = ({ children }) => {
  const [gameRules, setGameRules] = useState<GameRules>({ mode: 'all' });
  const setMode = useCallback((newMode: GameMode) => {
    setGameRules(oldState => ({ ...oldState, mode: newMode }));
  }, [gameRules.mode]);

  const [guessing, setGuessing] = useState(false);
  const [scaleDisplay, setScaleDisplay] = useState('????');

  const [currentKey, setCurrentKey] = useState<Scale>(dummyScale);

  const resetGame = useCallback(() => {
    setGuessing(false);
    setScaleDisplay('????');
    setCurrentKey(dummyScale);
  }, []);

  const generateKey = useCallback(() => {
    if (guessing) {
      setScaleDisplay(currentKey.name);
      setGuessing(false);
      return;
    }
    let selected;

    do {
      if (gameRules.mode === 'sharps') {
        const sharpScales = fullScales.filter(x => x.special?.includes('sharp'));
        selected = sharpScales[Math.floor(Math.random() * sharpScales.length)];
      }
      if (gameRules.mode === 'flats') {
        const flatScales = fullScales.filter(x => x.special?.includes('flat'));
        selected = flatScales[Math.floor(Math.random() * flatScales.length)];
      }
      if (gameRules.mode === 'modes') {
        const chosenMode = modeScales[Math.floor(Math.random() * modeScales.length)];
        const chosenStart = Math.floor(Math.random() * 7);
        const partial = Array.from(chosenMode.notes).slice(chosenStart, chosenStart + 7);
        selected = Object.create(chosenMode);
        selected.notes = partial;
        const modes = ['Ionian (Major)', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian (Minor)', 'Locrian'];
        let mode = chosenStart - selected.modeRotate;
        if (Math.sign(mode) === -1) mode += 7;
        selected.name = `${ selected.modeDefinition[chosenStart] } ${ modes[mode] }`;
      }
      if (gameRules.mode === 'all') selected = fullScales[Math.floor(Math.random() * fullScales.length)];
    } while (selected?.name === currentKey.name);
    if (selected) setCurrentKey(selected);
    setGuessing(true);
    setScaleDisplay('????');
  }, [gameRules.mode, currentKey, guessing]);

  const context = useMemo(() => ({
    gameRules,
    scaleDisplay,
    guessing,
    currentKey,
    resetGame,
    generateKey,
    setMode,
  }), [gameRules, scaleDisplay, guessing, resetGame, generateKey, setMode]);

  return (
    <GameRulesContext.Provider value={ context }>
      { children }
    </GameRulesContext.Provider>
  );
};

export default GameRulesProvider;
