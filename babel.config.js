module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {        
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.json','.ios.js', '.android.js'],
        alias: {
          'src': './src',
        },
      }
    ],
    'jest-hoist'
  ]
};
