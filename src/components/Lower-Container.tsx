import { FC } from 'react';

const LowerContainer: FC = () => (
  <div className='lower-container'>
  <div className='current-info-container'>
      <h2 id='mode-display' className='mode-display'>Mode: All Keys</h2>
  </div>
  <div className='lower-center-container'>
      <h1 id='key-display'>????</h1>
      <div id='modes-display' className='modes-display'>
          <p>1 Ionian (Major)</p>
          <p>2 Dorian</p>
          <p>3 Phrygian</p>
          <p>4 Lydian</p>
          <p>5 Mixolydian</p>
          <p>6 Aeolian (Minor)</p>
          <p>7 Locrian</p>
      </div>
      <button id='next-button' className='next-button'>Next Scale</button>
      <div className='options-container'>
          <h2>Sharps</h2>
          <input className='option-check' type='checkbox' name='' id='check-sharps' />
          <h2>Flats</h2>
          <input className='option-check' type='checkbox' name='' id='check-flats' />
      </div>
      <div className='options-container'>
          <h2>Modes</h2>
          <input className='option-check' type='checkbox' name='' id='check-modes' />
      </div>
  </div>
</div>
);

export default LowerContainer;
