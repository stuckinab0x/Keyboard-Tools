import { FC } from 'react';
import Octave from './Octave';

const KeyboardOverlay: FC = () => (
  <div className='keyboard-overlay'>
    <Octave octaveNumber={ 0 }></Octave>
    <Octave octaveNumber={ 1 }></Octave>
    <Octave octaveNumber={ 2 }></Octave>
    <Octave octaveNumber={ 3 }></Octave>
  </div>
);

export default KeyboardOverlay;
