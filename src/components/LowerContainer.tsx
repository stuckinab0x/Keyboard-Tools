import { FC, useState } from 'react';
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
    width: max-content;
  }

  > div {
    display: flex;
    
    > h2 {
      color: white;
    }
  }
`;

const OptionCheck = styled.input`
  height: 30px;
  width: 30px;
  margin: 10px 30px 10px 10px;
  align-self: center;
`;

interface LowerContainerProps {
  setMode: (mode: string) => void;
  generateKey: () => void;
  resetGame: () => void;
  scaleDisplay: string;
  guessing: boolean;
  currentMode: string;
}

const LowerContainer: FC<LowerContainerProps> = ({ setMode, generateKey, resetGame, scaleDisplay, guessing, currentMode }) => {
  const [showModeHelp, setShowModeHelp] = useState(true);

  return (
    <LowerContainerMain>
      <CurrentInfoContainer>
        <h2>{ `Game Mode: ${ currentMode.charAt(0).toUpperCase() }${ currentMode.slice(1) }` }</h2>
        <div>
          <h2>Mode Name Hints</h2>
          <OptionCheck checked={ showModeHelp } name='showmodes' type='checkbox' onChange={ () => setShowModeHelp(!showModeHelp) }/>
        </div>
      </CurrentInfoContainer>
      <LowerContainerCenter
        resetGame={ resetGame }
        setMode={ setMode }
        generateKey={ generateKey }
        scaleDisplay={ scaleDisplay }
        guessing={ guessing }
        showModeHelp={ showModeHelp }
      />
    </LowerContainerMain>
  );
};

export default LowerContainer;
