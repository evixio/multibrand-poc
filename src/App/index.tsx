import TVShowsCarousel from 'components/TVShows/Carousel';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TVShowsCarousel />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
