import { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Keyboard from './Keyboard';
import LowerContainer from './LowerContainer';
import GameRulesProvider from '../contexts/game-rules-context';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14pt;
    user-select: none;
  }

  body {
    background: linear-gradient(rgb(0, 0, 0) 50%, rgb(38, 38, 38));
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const App: FC = () => (
  <GameRulesProvider>
    <GlobalStyle />
    <Nav />
    <Keyboard />
    <LowerContainer />
  </GameRulesProvider>
);

export default App;
