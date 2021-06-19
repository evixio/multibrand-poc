import Header from 'components/Header';
import TVShowsCarousel from 'components/TVShows/Carousel';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const App = () => {
  return (
    <SafeAreaProvider>
      <Header />
      <SafeAreaView
        style={styles.container}
        edges={['left', 'right', 'bottom']}>
        <TVShowsCarousel />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
