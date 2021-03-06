module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'auto',
        useBuiltIns: 'usage',
        shippedProposals: true,
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
        pragma: 'React.createElement'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components'
  ]
}
