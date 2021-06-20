import Header from 'components/Header';
import TVShowsCarousel from 'components/TVShows/Carousel';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const LandingScreen = () => {
  return (
    <>
      <Header />
      <SafeAreaView
        style={styles.container}
        edges={['left', 'right', 'bottom']}>
        <TVShowsCarousel />
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
