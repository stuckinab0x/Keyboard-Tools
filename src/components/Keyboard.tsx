import { FC } from 'react';
import styled from 'styled-components';
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

const Keyboard: FC = () => (
  <KeyBoardContainer>
    <KeyboardOverlay />
    <KeyboardImage src={ keyboard }/>
  </KeyBoardContainer>
);

export default Keyboard;
