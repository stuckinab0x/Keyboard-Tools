import { FC } from 'react';
import styled from 'styled-components';
import Octave from './Octave';
import { useGameRules } from '../contexts/game-rules-context';

const OverlayMain = styled.div`
  position: relative;
`;

const KeyboardOverlay: FC = () => {
  const { gameRules, currentKey } = useGameRules();

  return (
  <OverlayMain>
    { [0, 1, 2, 3, 4].map(x => <Octave key={ x } octaveNumber={ x } currentKey={ currentKey } modeIsModes={ gameRules.mode === 'modes' }></Octave>) }
  </OverlayMain>
  );
};

export default KeyboardOverlay;
