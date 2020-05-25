import React from 'react';
import logo from './logo.svg';
import styled, { createGlobalStyle } from 'styled-components'

import Button from './components/graphical/Button.js'

const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor1: #5F5F5F;
    --mainColor2: #55BA96;
    --mainColor3: #DBF0E9;
    --textColor: #757575;
  }
  #root {
    height: 100%
  }
  body {
    box-sizing: border-box;
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    position: relative;
    overflow: scroll;
    font-size: 1.5em;
    background: white;
    padding: 50px;
  }
  html {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Button>touch me</Button>
    </div>
  );
}

export default App;
