const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        global: path.resolve(__dirname, 'src/components/global/index.ts'),
      },
    },
  },
};
