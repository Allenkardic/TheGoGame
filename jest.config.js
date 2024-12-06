module.exports = {
  preset: 'react-native',
  preset: 'react-native',
  // setupFiles: ['<rootDir>/jest/setup.js'],
  setupFiles: ['./jest/setup.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation|@react-native-async-storage/async-storage|react-native-flash-message|react-native/Libraries/Animated/NativeAnimatedHelper/*)',
  ],
};
