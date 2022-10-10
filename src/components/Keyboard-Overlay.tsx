import { FC } from 'react';
import Scale from '../models/scale';
import Octave from './Octave';

interface KeyboardOverlayProps {
  mode: string;
  currentKey: Scale;
}

const KeyboardOverlay: FC<KeyboardOverlayProps> = ({ currentKey, mode }) => (
  <div className='keyboard-overlay'>
    <Octave octaveNumber={ 0 } currentKey={ currentKey } modeIsModes={ mode === 'modes' }></Octave>
    <Octave octaveNumber={ 1 } currentKey={ currentKey } modeIsModes={ mode === 'modes' }></Octave>
    <Octave octaveNumber={ 2 } currentKey={ currentKey } modeIsModes={ mode === 'modes' }></Octave>
    <Octave octaveNumber={ 3 } currentKey={ currentKey } modeIsModes={ mode === 'modes' }></Octave>
  </div>
);

export default KeyboardOverlay;
