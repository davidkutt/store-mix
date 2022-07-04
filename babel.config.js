module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
  plugins:
    [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ['react-native-paper/babel']
    ]
};
