import { FC, useState } from 'react';
import styled from 'styled-components';
import LowerContainerCenter from './LowerContainerCenter';
import CurrentInfoContainer from './CurrentInfoContainer';
import ModesDisplay from './ModesDisplay';

const LowerContainerMain = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;

const ModesContainer = styled.div`
  width: 20vw
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
      <CurrentInfoContainer currentMode={ currentMode } showModeHelp={ showModeHelp } setShowModeHelp={ setShowModeHelp } />
      <LowerContainerCenter
        resetGame={ resetGame }
        setMode={ setMode }
        generateKey={ generateKey }
        scaleDisplay={ scaleDisplay }
        guessing={ guessing }
        showModeHelp={ showModeHelp }
      />
      <ModesContainer>
        { showModeHelp && <ModesDisplay /> }
      </ModesContainer>
    </LowerContainerMain>
  );
};

export default LowerContainer;
