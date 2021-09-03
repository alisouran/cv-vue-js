const path = require('path');
module.exports = {
  pwa: {
    name: 'Souran', // <---- this is PWA name
    themeColor: '#0B0E31',
  },
  configureWebpack: {
    resolve: {
      alias: {
        global: path.resolve(__dirname, 'src/components/global/index.ts'),
      },
    },
  },
};
