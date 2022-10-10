import { FC, useState, useCallback } from 'react';

interface LowerContainerProps {
  setMode: (mode: string) => void;
  generateKey: () => void;
}

const LowerContainer: FC<LowerContainerProps> = ({ setMode, generateKey }) => {
  const [sharpsChecked, setSharpsChecked] = useState(false);
  const [flatsChecked, setFlatsChecked] = useState(false);
  const [modesChecked, setModesChecked] = useState(false);

  const handleCheckClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
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
  <div className='lower-container'>
  <div className='current-info-container'>
      <h2 className='mode-display'>Mode: All Keys</h2>
  </div>
  <div className='lower-center-container'>
      <h1 className='key-display'>????</h1>
      <div className='modes-display'>
          <p>1 Ionian (Major)</p>
          <p>2 Dorian</p>
          <p>3 Phrygian</p>
          <p>4 Lydian</p>
          <p>5 Mixolydian</p>
          <p>6 Aeolian (Minor)</p>
          <p>7 Locrian</p>
      </div>
      <button id='next-button' className='next-button' onClick={ () => generateKey() }>Next Scale</button>
      <div className='options-container'>
          <h2>Sharps</h2>
          <input checked={ sharpsChecked } name='sharps' className='option-check' type='checkbox' onChange={ event => handleCheckClick(event) }/>
          <h2>Flats</h2>
          <input checked={ flatsChecked } name='flats' className='option-check' type='checkbox' onChange={ event => handleCheckClick(event) }/>
      </div>
      <div className='options-container'>
          <h2>Modes</h2>
          <input checked={ modesChecked } name='modes' className='option-check' type='checkbox' onChange={ event => handleCheckClick(event) }/>
      </div>
  </div>
</div>
  );
};

export default LowerContainer;
