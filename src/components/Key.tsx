import { FC } from 'react';
import styled, { css } from 'styled-components';
import keyPositions from '../data/keyPositions';
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

interface KeyImageProps {
  blackKey: boolean;
  left: string;
  top: string;
}

const blackKeyStyle = css`
  z-index: 10;
  filter: brightness(1.8);
`;

const KeyImage = styled.img<KeyImageProps>`
  ${ props => props.blackKey ? blackKeyStyle : '' }
  position: absolute;
  left: ${ props => props.left }px;
  top: ${ props => props.top }px;
`;

interface KeyProps {
  letter: string;
  octaveNumber: number;
}

const Key: FC<KeyProps> = ({ letter, octaveNumber }) => {
  const blackKey = letter.includes('sharp');
  const fullName = `${ letter }${ String(octaveNumber) }`;
  const positionData = keyPositions.filter(x => x.keyName === fullName)[0];

  return (
    <KeyImage
      blackKey={ blackKey }
      left={ positionData.left }
      top={ positionData.top }
      src={ blackKey ? keyBlack : getKeyImageByLetter(letter) }
      className={ `key ${ letter.includes('sharp') ? 'key-black' : '' } ${ letter }` }
    />
  );
};

export default Key;

// id={ `${ letter }${ String(octaveNumber) }` }
