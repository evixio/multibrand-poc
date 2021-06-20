import { StyleSheet } from 'react-native';
import { tailwind } from 'styles/tailwind';
import { Brand, contextualStyles } from 'utils/branding';

const styles = StyleSheet.create({
  container: {
    ...tailwind('items-center bg-gray-100 flex-1'),
    ...contextualStyles(Brand.Telenet, {
      ...tailwind('bg-gray-50'),
    }),
    ...contextualStyles(Brand.VRT, {
      backgroundColor: '#F8F8F9',
    }),
  },
});

export default styles;
