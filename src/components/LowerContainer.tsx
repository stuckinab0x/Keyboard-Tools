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
  width: 20vw;
`;

const LowerContainer: FC = () => {
  const [showModeHelp, setShowModeHelp] = useState(true);

  return (
    <LowerContainerMain>
      <CurrentInfoContainer showModeHelp={ showModeHelp } setShowModeHelp={ setShowModeHelp } />
      <LowerContainerCenter />
      <ModesContainer>
        { showModeHelp && <ModesDisplay /> }
      </ModesContainer>
    </LowerContainerMain>
  );
};

export default LowerContainer;
