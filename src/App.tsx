import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingScreen from 'screens/Landing';

const App = () => {
  return (
    <SafeAreaProvider>
      <LandingScreen />
    </SafeAreaProvider>
  );
};

export default App;
