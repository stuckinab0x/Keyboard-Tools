import { FC } from 'react';
import Scale from '../models/scale';
import Key from './Key';

const keys = ['C', 'Csharp', 'D', 'Dsharp', 'E', 'F', 'Fsharp', 'G', 'Gsharp', 'A', 'Asharp', 'B'];

interface OctaveProps {
  octaveNumber: number;
  currentKey: Scale;
}

const Octave: FC<OctaveProps> = ({ octaveNumber, currentKey }) => (
  <>
    { keys.map(x => currentKey.notes.includes(x) ? <Key key={ x } letter={ x } octaveNumber={ octaveNumber }></Key> : null) }
  </>
);

export default Octave;
