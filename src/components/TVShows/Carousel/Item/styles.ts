import { Dimensions, StyleSheet } from 'react-native';
import { tailwind } from 'styles/tailwind';

const width = Dimensions.get('window').width;
const height = width / 1.5;

const styles = StyleSheet.create({
  card: {
    ...tailwind('flex-1'),
  },
  cardContent: {
    ...tailwind('p-4 pt-2 pb-6'),
  },
  container: {
    ...tailwind('bg-white rounded-xl'),
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    ...tailwind('rounded-xl rounded-b-none w-full'),
    height,
  },
  content: {
    ...tailwind('p-4'),
  },
  title: {
    ...tailwind('font-bold text-2xl text-black mb-2'),
  },
  text: {
    ...tailwind('font-regular text-base text-gray-500'),
  },
});

export default styles;
