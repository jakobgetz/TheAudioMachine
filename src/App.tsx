import React from 'react';
import { useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css'

import { RootState } from './redux'

import Router from './components/Router'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}
`

const App: React.FC = () => {

  const { theme } = useSelector((state: RootState) => state.tam.graphics)

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
  );
}

export default App;
