import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import Routes from './routes'
import {ThemeProvider} from 'styled-components';


import dark from './Styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme = {dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
