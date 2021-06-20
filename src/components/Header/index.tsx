import DynamicConfig, { Brand } from 'dynamic-config';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Header = () => {
  return (
    <>
      <StatusBar
        barStyle={
          [Brand.Telenet].includes(DynamicConfig.brand)
            ? 'light-content'
            : 'dark-content'
        }
      />
      <View style={styles.container}>
        <SafeAreaView style={styles.container} edges={['top']}>
          <Text style={styles.title}>
            {DynamicConfig.brand === Brand.Default && 'Default'}
            {DynamicConfig.brand === Brand.Telenet && 'Telenet'}
          </Text>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Header;
