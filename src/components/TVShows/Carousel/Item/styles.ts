import { Dimensions, StyleSheet } from 'react-native';
import { tailwind } from 'styles/tailwind';
import { Brand, contextualStyles as contextualStyle } from 'utils/branding';

const width = Dimensions.get('window').width;
const height = width / 1.5;

const styles = StyleSheet.create({
  card: {
    ...tailwind('flex-1'),
  },
  cardContent: {
    ...tailwind('p-4 pt-5 pb-6'),
  },
  container: {
    ...tailwind('bg-white'),
    ...contextualStyle(Brand.Telenet, {
      ...tailwind('bg-white rounded-xl'),
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    }),
  },
  image: {
    ...tailwind('w-full'),
    ...contextualStyle(Brand.Telenet, {
      ...tailwind('rounded-xl rounded-b-none'),
    }),
    height,
  },
  content: {
    ...tailwind('p-4'),
  },
  title: {
    ...tailwind('mb-2 font-bold text-2xl text-primary'),
  },
  text: {
    ...tailwind('font-regular text-base text-secondary'),
  },
});

export default styles;
