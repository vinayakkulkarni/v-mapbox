module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    test: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            alias: {
              '@': './',
              '~': './',
            },
          },
        ],
      ],
      ignore: ['ava.config.cjs'],
    },
  },
};
