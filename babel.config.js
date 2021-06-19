const { readdirSync } = require('fs');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src', './resources'],
        alias: {
          '@resources': './resources',
          ...readdirSync('./src', { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
            .reduce(
              (res, item) => ({
                ...res,
                [`@/${item}`]: `./src/${item}`,
              }),
              {},
            ),
        },
      },
    ],
  ],
};
