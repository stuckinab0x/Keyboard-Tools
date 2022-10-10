import { FC } from 'react';
import Scale from '../models/scale';
import Octave from './Octave';

interface KeyboardOverlayProps {
  mode: string;
  currentKey: Scale;
}

const KeyboardOverlay: FC<KeyboardOverlayProps> = ({ currentKey }) => (
  <div className='keyboard-overlay'>
    <Octave octaveNumber={ 0 } currentKey={ currentKey }></Octave>
    <Octave octaveNumber={ 1 } currentKey={ currentKey }></Octave>
    <Octave octaveNumber={ 2 } currentKey={ currentKey }></Octave>
    <Octave octaveNumber={ 3 } currentKey={ currentKey }></Octave>
  </div>
);

export default KeyboardOverlay;
