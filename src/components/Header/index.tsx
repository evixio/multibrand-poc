import DynamicConfig, { Brand } from 'dynamic-config';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.title}>
          {DynamicConfig.brand === Brand.Default && 'Default'}
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Header;
