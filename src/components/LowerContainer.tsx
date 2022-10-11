import { FC } from 'react';
import styled from 'styled-components';
import LowerContainerCenter from './LowerContainerCenter';

const LowerContainerMain = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CurrentInfoContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 100px;
  display: flex;
  flex-direction: column;

  > h2 {
    color: rgb(166, 166, 166);
    border: rgb(103, 103, 103) solid 5px;
    border-radius: 5px;
    margin-top: 30px;
    padding: 7px 10px;
  }
`;

interface LowerContainerProps {
  setMode: (mode: string) => void;
  generateKey: () => void;
  resetGame: () => void;
  scaleDisplay: string;
  guessing: boolean;
  currentMode: string;
}

const LowerContainer: FC<LowerContainerProps> = ({ setMode, generateKey, resetGame, scaleDisplay, guessing, currentMode }) => (
  <LowerContainerMain>
    <CurrentInfoContainer>
      <h2>{ `Mode: ${ currentMode.charAt(0).toUpperCase() }${ currentMode.slice(1) }` }</h2>
    </CurrentInfoContainer>
    <LowerContainerCenter
      resetGame={ resetGame }
      setMode={ setMode }
      generateKey={ generateKey }
      scaleDisplay={ scaleDisplay }
      guessing={ guessing }
    />
  </LowerContainerMain>
);

export default LowerContainer;
