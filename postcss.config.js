module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-preset-env')({ /* ...options */ }),

    require('cssnano')({ /* ...options */ }),
  ],
};
