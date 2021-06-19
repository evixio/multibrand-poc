import { TVShow } from 'hooks/data/tv-shows';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

interface Props {
  data: TVShow;
}

const TVShowsCarouselItem = ({ data }: Props) => {
  return (
    <ScrollView style={styles.card} contentContainerStyle={styles.cardContent}>
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={{
            uri: data.imageUrl,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.text}>{data.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TVShowsCarouselItem;
