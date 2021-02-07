import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';

import Layout  from './components/Layout'
import dark from './Styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme = {dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
