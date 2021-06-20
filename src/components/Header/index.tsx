import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { activeBrand, Brand } from 'utils/branding';

import styles from './styles';

const Header = () => {
  return (
    <>
      <StatusBar
        barStyle={
          [Brand.Default, Brand.Telenet].includes(activeBrand)
            ? 'light-content'
            : 'dark-content'
        }
      />
      <View style={styles.container}>
        <SafeAreaView style={styles.container} edges={['top']}>
          <Text style={styles.title}>
            {activeBrand === Brand.Default && 'Default'}
            {activeBrand === Brand.Telenet && 'Telenet'}
          </Text>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Header;
