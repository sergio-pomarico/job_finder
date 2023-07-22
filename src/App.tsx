import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './routes/main';
import {ThemeProvider} from './config/theme';

const App = () => (
  <ThemeProvider>
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  </ThemeProvider>
);

export default App;
