import { FC } from 'react';
import keyBlack from '../images/key black.png';
import keyA from '../images/key A.png';
import keyB from '../images/key B.png';
import keyC from '../images/key C.png';
import keyD from '../images/key D.png';
import keyE from '../images/key E.png';
import keyF from '../images/key F.png';
import keyG from '../images/key G.png';

function getKeyImageByLetter(letter: string) {
  const images = [keyA, keyB, keyC, keyD, keyE, keyF, keyG];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  return images[letters.indexOf(letter)];
}

interface KeyProps {
  letter: string;
  octaveNumber: number;
}

const Key: FC<KeyProps> = ({ letter, octaveNumber }) => (
  <img
    id={ `${ letter }${ String(octaveNumber) }` }
    src={ letter.includes('sharp') ? keyBlack : getKeyImageByLetter(letter) }
    className={ `key ${ letter.includes('sharp') ? 'key-black' : '' } ${ letter }` }></img>
);

export default Key;
