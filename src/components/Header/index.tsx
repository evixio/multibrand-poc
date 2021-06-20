import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Branding, { Brand } from 'utils/branding';

import styles from './styles';

const Header = () => {
  return (
    <>
      <StatusBar
        barStyle={
          [Brand.Telenet].includes(Branding.brand)
            ? 'light-content'
            : 'dark-content'
        }
      />
      <View style={styles.container}>
        <SafeAreaView style={styles.container} edges={['top']}>
          <Text style={styles.title}>
            {Branding.brand === Brand.Default && 'Default'}
            {Branding.brand === Brand.Telenet && 'Telenet'}
          </Text>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Header;
