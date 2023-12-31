module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@assets': './assets',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@components': './src/components',
          '@screens': './src/screens',
          '@config': './src/config',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@types': './src/types',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@i18n': './src/i18n',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
}
