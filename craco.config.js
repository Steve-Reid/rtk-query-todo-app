const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@app': path.resolve(__dirname, './src/app/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@counter': path.resolve(__dirname, './src/features/counter')
    }
  }
};
