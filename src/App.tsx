import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './routes/main';
import {ThemeProvider} from './config/theme';
import {Provider} from 'react-redux';
import store from './store/redurcer';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
