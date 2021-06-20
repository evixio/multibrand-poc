import { StyleSheet } from 'react-native';
import { tailwind } from 'styles/tailwind';

const styles = StyleSheet.create({
  container: {
    ...tailwind('items-center bg-gray-50 flex-1'),
  },
});

export default styles;
