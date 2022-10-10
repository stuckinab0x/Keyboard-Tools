import { FC } from 'react';
import Key from './Key';

const keys = ['C', 'Csharp', 'D', 'Dsharp', 'E', 'F', 'Fsharp', 'G', 'Gsharp', 'A', 'Asharp', 'B'];

interface OctaveProps {
  octaveNumber: number;
}

const Octave: FC<OctaveProps> = ({ octaveNumber }) => (
  <>
    { keys.map(x => (<Key letter={ x } octaveNumber={ octaveNumber }></Key>)) }
  </>
);

export default Octave;
