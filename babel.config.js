module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { useBuiltIns: 'entry', corejs: '2', targets: { node: 'current' } },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
