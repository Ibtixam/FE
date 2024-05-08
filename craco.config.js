const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
