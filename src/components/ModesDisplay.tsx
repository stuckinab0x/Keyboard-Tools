import { FC } from 'react';
import styled from 'styled-components';

const ModesDisplayMain = styled.div`
  color: rgb(166, 166, 166);
  border: rgb(103, 103, 103) solid 5px;
  border-radius: 5px;
  margin-top: 30px;
  padding: 7px 10px;
  right: 146px;
  color: white;
  font-size: 2rem;

  > p {
    font-size: 1.6rem;
    margin: 4px 0px;
  }
`;

const ModesDisplay: FC = () => (
  <ModesDisplayMain>
    <p><b>Mode Names:</b></p>
    <p>1 Ionian (Major)</p>
    <p>2 Dorian</p>
    <p>3 Phrygian</p>
    <p>4 Lydian</p>
    <p>5 Mixolydian</p>
    <p>6 Aeolian (Minor)</p>
    <p>7 Locrian</p>
  </ModesDisplayMain>
);

export default ModesDisplay;
