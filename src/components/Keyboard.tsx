import { FC } from 'react';
import styled from 'styled-components';
import Scale from '../models/scale';
import KeyboardOverlay from './KeyboardOverlay';
import keyboard from '../images/keyboard.png';

const KeyBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const KeyboardImage = styled.img`
  opacity: 10%;
  z-index: 0;
`;

interface KeyboardProps {
  mode: string;
  currentKey: Scale;
}

const Keyboard: FC<KeyboardProps> = ({ mode, currentKey }) => (
  <KeyBoardContainer>
    <KeyboardOverlay mode={ mode } currentKey={ currentKey }/>
    <KeyboardImage src={ keyboard }/>
  </KeyBoardContainer>
);

export default Keyboard;
