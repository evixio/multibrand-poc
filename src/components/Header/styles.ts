import { StyleSheet } from 'react-native';
import { tailwind } from 'styles/tailwind';

const styles = StyleSheet.create({
  container: {
    ...tailwind('bg-header w-full items-center py-1.5'),
  },
  title: {
    ...tailwind('font-bold text-lg text-header'),
  },
});

export default styles;
