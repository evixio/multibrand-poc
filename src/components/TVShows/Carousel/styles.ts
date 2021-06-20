import { StyleSheet } from 'react-native';
import { tailwind } from 'styles/tailwind';

const styles = StyleSheet.create({
  loadingContainer: {
    ...tailwind('flex-1 items-center justify-center pb-12'),
  },
  loadingIndicator: {
    ...tailwind('text-gray-400'),
  },
});

export default styles;
