import { FC, useState, useCallback } from 'react';
import Nav from './Nav';
import Keyboard from './Keyboard';
import LowerContainer from './Lower-Container';
import Scale from '../models/scale';
import { modeScales, fullScales } from '../data/scaleDefinitions';
import '../App.css';
import '../keypos.css';

const App: FC = () => {
  const [gameRules, setGameRules] = useState({ mode: 'all' });
  const setMode = useCallback((newMode: string) => {
    setGameRules(oldState => ({ ...oldState, mode: newMode }));
  }, [gameRules.mode]);

  // const [guessing, setGuessing] = useState(false);

  const [currentKey, setCurrentKey] = useState<Scale>(fullScales[0]);

  const generateKey = useCallback(() => {
    let selected;

    if (gameRules.mode === 'sharps') {
      const sharpScales = fullScales.filter(x => x.special.includes('sharps'));
      selected = sharpScales[Math.floor(Math.random() * sharpScales.length)];
    } else if (gameRules.mode === 'flats') {
      const flatScales = fullScales.filter(x => x.special.includes('flats'));
      selected = flatScales[Math.floor(Math.random() * flatScales.length)];
    } else if (gameRules.mode === 'modes') { selected = modeScales[Math.floor(Math.random() * modeScales.length)]; } else {
      selected = fullScales[Math.floor(Math.random() * fullScales.length)];
    }
    setCurrentKey(selected);
  }, [gameRules.mode]);

  return (
    <div>
      <Nav />
      <Keyboard mode={ gameRules.mode } currentKey={ currentKey }/>
      <LowerContainer setMode={ setMode } generateKey={ generateKey }/>
    </div>
  );
};

export default App;
