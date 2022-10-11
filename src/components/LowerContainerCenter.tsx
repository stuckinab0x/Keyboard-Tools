import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import ModesDisplay from './ModesDisplay';

const LowerContainerCenterMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;

  > h1 {
    font-size: 5rem;
    margin: 20px 20px;
    color: white;
  }
`;

const NextButton = styled.button`
  background-color: rgb(63, 63, 63);
  font-size: 3rem;
  color: white;
  border: rgb(159, 159, 159) solid 7px;
  border-radius: 10px;
  height: 100px;
  width: 550px;
  margin-bottom: 20px;

  &:hover { 
    background-color: rgb(148, 149, 148);
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  align-content: center;
  margin: 5px 0px;
  justify-content: space-evenly;

  > h2 {
    margin: auto;
    color: white;
  }
`;

const OptionCheck = styled.input`
  height: 30px;
  width: 30px;
  margin: 10px 30px 10px 10px;
  align-self: center;
`;

interface LowerContainerCenterProps {
  resetGame: () => void;
  setMode: (mode: string) => void;
  generateKey: () => void;
  scaleDisplay: string;
  guessing: boolean;
  showModeHelp: boolean
}

const LowerContainerCenter: FC<LowerContainerCenterProps> = ({ resetGame, setMode, generateKey, scaleDisplay, guessing, showModeHelp }) => {
  const [sharpsChecked, setSharpsChecked] = useState(false);
  const [flatsChecked, setFlatsChecked] = useState(false);
  const [modesChecked, setModesChecked] = useState(false);

  const handleCheckClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    resetGame();
    setSharpsChecked(false);
    setFlatsChecked(false);
    setModesChecked(false);

    if (!event.currentTarget.checked) {
      setMode('all');
      return;
    }

    const { name } = event.currentTarget;

    if (name === 'sharps') setSharpsChecked(true);
    else if (name === 'flats') setFlatsChecked(true);
    else setModesChecked(true);

    setMode(name);
  }, [sharpsChecked, flatsChecked, modesChecked]);

  return (
    <LowerContainerCenterMain>
      <h1>{ scaleDisplay }</h1>
      { showModeHelp ? <ModesDisplay /> : null }
      <NextButton onClick={ () => generateKey() }>{ guessing ? 'Show Answer' : 'Next Scale' }</NextButton>
      <OptionsContainer>
        <h2>Sharps</h2>
        <OptionCheck checked={ sharpsChecked } name='sharps' type='checkbox' onChange={ event => handleCheckClick(event) }/>
        <h2>Flats</h2>
        <OptionCheck checked={ flatsChecked } name='flats' type='checkbox' onChange={ event => handleCheckClick(event) }/>
      </OptionsContainer>
      <OptionsContainer>
        <h2>Modes</h2>
        <OptionCheck checked={ modesChecked } name='modes' type='checkbox' onChange={ event => handleCheckClick(event) }/>
      </OptionsContainer>
    </LowerContainerCenterMain>
  );
};

export default LowerContainerCenter;
