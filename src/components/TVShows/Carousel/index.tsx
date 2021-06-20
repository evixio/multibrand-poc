import { usePopularTVShows } from 'hooks/data/tv-shows';
import React, { useRef } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import TVShowsCarouselItem from './Item';
import styles from './styles';

const width = Dimensions.get('window').width;

const TVShowsCarousel = () => {
  const carousel = useRef(null);
  const { data, loading } = usePopularTVShows();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={styles.loadingIndicator.color} />
      </View>
    );
  }

  return (
    <Carousel
      layout={'default'}
      ref={carousel}
      data={data}
      sliderWidth={width}
      itemWidth={width}
      renderItem={({ index, item }) => (
        <TVShowsCarouselItem
          key={`tvshows-carousel-item-${index}`}
          data={item}
        />
      )}
    />
  );
};

export default TVShowsCarousel;
