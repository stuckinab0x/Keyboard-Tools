import { FC } from 'react';
import Nav from './Nav';
import Keyboard from './Keyboard';
import LowerContainer from './Lower-Container';
import '../App.css';
import '../keypos.css';

const App: FC = () => (
    <div>
      <Nav />
      <Keyboard />
      <LowerContainer />
    </div>
);

export default App;
