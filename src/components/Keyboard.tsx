import { FC } from 'react';
import Scale from '../models/scale';
import KeyboardOverlay from './Keyboard-Overlay';
import keyboard from '../images/keyboard.png';

interface KeyboardProps {
  mode: string;
  currentKey: Scale;
}

const Keyboard: FC<KeyboardProps> = ({ mode, currentKey }) => (
  <div className='keyboard-container'>
    <KeyboardOverlay mode={ mode } currentKey={ currentKey }/>
    <img id="keyboard" className="keyboard" src={ keyboard }/>
  </div>
);

export default Keyboard;
