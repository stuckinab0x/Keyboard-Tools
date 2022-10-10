import { FC, useState, useCallback } from 'react';
import Nav from './Nav';
import Keyboard from './Keyboard';
import LowerContainer from './Lower-Container';
import Scale from '../models/scale';
import { modeScales, fullScales } from '../data/scaleDefinitions';
import '../App.css';
import '../keypos.css';

const dummyScale: Scale = {
  name: '',
  notes: [],
};

const App: FC = () => {
  const [gameRules, setGameRules] = useState({ mode: 'all' });
  const setMode = useCallback((newMode: string) => {
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
        selected.name = selected.modeDefinition[chosenStart];
      }
      if (gameRules.mode === 'all') selected = fullScales[Math.floor(Math.random() * fullScales.length)];
    } while (selected?.name === currentKey.name);
    if (selected) setCurrentKey(selected);
    setGuessing(true);
    setScaleDisplay('????');
  }, [gameRules.mode, currentKey, guessing]);

  return (
    <div>
      <Nav />
      <Keyboard mode={ gameRules.mode } currentKey={ currentKey }/>
      <LowerContainer setMode={ setMode } generateKey={ generateKey } resetGame={ resetGame } scaleDisplay={ scaleDisplay } guessing={ guessing } currentMode={ gameRules.mode }/>
    </div>
  );
};

export default App;
