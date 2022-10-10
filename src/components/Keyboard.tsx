import { FC } from 'react';
import KeyboardOverlay from './Keyboard-Overlay';
import keyboard from '../images/keyboard.png';

const Keyboard: FC = () => (
  <div className='keyboard-container'>
    <KeyboardOverlay />
    <img id="keyboard" className="keyboard" src={ keyboard }/>
  </div>
);

export default Keyboard;
