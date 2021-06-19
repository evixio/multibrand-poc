import { TVShow, usePopularTVShows } from 'hooks/data/tv-shows';
import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';

const App = () => {
  const carousel = useRef(null);
  const { data } = usePopularTVShows();

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Carousel
          layout={'default'}
          ref={carousel}
          data={data}
          sliderWidth={320}
          itemWidth={320}
          renderItem={({ index, item }: { index: number; item: TVShow }) => {
            console.log({ index, item });
            return (
              <View
                key={`tvshow-item-${index}`}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FastImage
                  style={{
                    width: 320,
                    height: 200,
                  }}
                  source={{
                    uri: item.imageUrl,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />

                <Text
                  style={{
                    padding: 10,
                    fontSize: 20,
                    fontFamily: 'IBMPlexSans-Medium',
                  }}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
