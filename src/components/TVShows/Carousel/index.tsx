import { usePopularTVShows } from 'hooks/data/tv-shows';
import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import TVShowsCarouselItem from './Item';

const width = Dimensions.get('window').width;

const TVShowsCarousel = () => {
  const carousel = useRef(null);
  const { data } = usePopularTVShows();

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
