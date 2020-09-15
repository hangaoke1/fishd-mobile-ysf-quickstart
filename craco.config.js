const CracoLessPlugin = require('craco-less');

module.exports = function({ env }){
  return {
    style: {
      postcss: {
        mode: "file",
      },
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {
                '@primaryColor': 'pink', // primary color for all components
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: '@ysf/fishd-mobile',
            libraryDirectory: 'es/components',
            camel2DashComponentName: false,
            style: true //设置为true即是less
          }
        ]
      ]
    }
  };
};
