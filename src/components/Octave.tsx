import { FC } from 'react';
import Scale from '../models/scale';
import Key from './Key';

const keys = ['C', 'Csharp', 'D', 'Dsharp', 'E', 'F', 'Fsharp', 'G', 'Gsharp', 'A', 'Asharp', 'B'];

interface OctaveProps {
  octaveNumber: number;
  currentKey: Scale;
  modeIsModes: boolean;
}

const Octave: FC<OctaveProps> = ({ octaveNumber, currentKey, modeIsModes }) => (
  <>
    { keys.map(x => {
      if (modeIsModes && !currentKey.notes.includes(`${ x }${ octaveNumber }`)) return null;
      if (!modeIsModes && !currentKey.notes.includes(x)) return null;

      return (<Key key={ x } letter={ x } octaveNumber={ octaveNumber }></Key>);
    }) }
  </>
);

export default Octave;
