module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@globals': './src/global',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@services': './src/services',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
