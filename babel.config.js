module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@globals': './src/global',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
