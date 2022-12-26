import { FC, useState, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Keyboard from './Keyboard';
import LowerContainer from './LowerContainer';
import Scale from '../models/scale';
import { modeScales, fullScales } from '../data/scaleDefinitions';

const dummyScale: Scale = {
  name: '',
  notes: [],
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14pt;
    user-select: none;
  }

  body {
    background: linear-gradient(rgb(0, 0, 0) 50%, rgb(38, 38, 38));
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

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

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Keyboard mode={ gameRules.mode } currentKey={ currentKey }/>
      <LowerContainer setMode={ setMode } generateKey={ generateKey } resetGame={ resetGame } scaleDisplay={ scaleDisplay } guessing={ guessing } currentMode={ gameRules.mode }/>
    </div>
  );
};

export default App;
