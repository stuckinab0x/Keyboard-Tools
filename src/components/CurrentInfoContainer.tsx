import React, { FC } from 'react';
import styled from 'styled-components';

const CurrentInfoContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

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

interface CurrentInfoContainerProps {
  currentMode: string;
  showModeHelp: boolean;
  setShowModeHelp: (show: boolean) => void;
}

const CurrentInfoContainer: FC<CurrentInfoContainerProps> = ({ currentMode, showModeHelp, setShowModeHelp }) => (
    <CurrentInfoContainerMain>
      <h2>{ `Game Mode: ${ currentMode.charAt(0).toUpperCase() }${ currentMode.slice(1) }` }</h2>
        <div>
          <h2>Mode Name Hints</h2>
          <OptionCheck checked={ showModeHelp } name='showmodes' type='checkbox' onChange={ () => setShowModeHelp(!showModeHelp) }/>
        </div>

    </CurrentInfoContainerMain>
);

export default CurrentInfoContainer;
