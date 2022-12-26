import { FC } from 'react';
import styled from 'styled-components';
import Scale from '../models/scale';
import Octave from './Octave';

const OverlayMain = styled.div`
  position: relative;
`;

interface KeyboardOverlayProps {
  mode: string;
  currentKey: Scale;
}

const KeyboardOverlay: FC<KeyboardOverlayProps> = ({ currentKey, mode }) => (
  <OverlayMain>
    { [0, 1, 2, 3, 4].map(x => <Octave key={ x } octaveNumber={ x } currentKey={ currentKey } modeIsModes={ mode === 'modes' }></Octave>) }
  </OverlayMain>
);

export default KeyboardOverlay;
