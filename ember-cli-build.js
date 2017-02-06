/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = 'production' === process.env.EMBER_ENV;
const options = {
  import: {
    path: 'app/styles'
  },
  cssnext: {
    features: {
      browsers: '> 1%, last 3 versions, Firefox ESR, Opera 12.1, not ie <= 8',
      customProperties: {preserve: 'computed'},
      nesting: false
    }
  },
  rucksack: {
    alias: false,
    hexRGBA: false,
    fallbacks: true
  },
  cssnano: {
    autoprefixer: false,
    core: isProduction,
    discardComments: isProduction,
    mergeIdents: false,
    reduceIdents: false,
    sourcemap: !isProduction
  }
};

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    outputPaths: {
      app: {
        css: {app: '/assets/bundle.css'},
        js: '/assets/bundle.js'
      }
    },

    cssModules: {
      plugins: {
        before: [
          require('postcss-import')(options.import),
          require('postcss-nesting'),
          require('postcss-extend'),
        ],
        after: [
          require('postcss-fallback'),
          require('postcss-cssnext')(options.cssnext),
          require('rucksack-css')(options.rucksack),
          require('cssnano')(options.cssnano)
        ]
      },

      virtualModules: {
        'ui-colors': {
          'ui-red': '#e74c3c',
          'ui-white': '#fff',
          'ui-purple': '#5940aa',
          'ui-blue': '#1894f2',
          'ui-green': '#2ecc71',
          'ui-golden': '#f1c40f',
          'ui-light': 'color(#bdc3c7 a(25%))',
          'ui-fade-silver': 'color(#bdc3c7 a(50%))',
          'ui-silver': '#bdc3c7',
          'ui-gray': '#919ba2',
          'ui-fade-slate': 'color(#4e5b68 a(60%))',
          'ui-slate': '#4e5b68',
          'ui-dark-slate': '#34495e',
          'cadillac-red': '#862838'
        }
      }
    },

    /*    nodeAssets: {
     dropzone:{
     srcDir: 'dist',
     import:[
     {
     path:'min/dropzone.min.js'
     }
     ]
     },
     },*/
  });

  app.import('./vendor/ImageUploader.js');
  app.import('./vendor/shims/imageupload.js');
  /*// device
   app.import('bower_components/device.js/lib/device.min.js');
   app.import('./vendor/shims/device.js');

   // addIndicators
   app.import('./vendor/addIndicators.js');

   // gsapanimation
   app.import('./vendor/gsapanimation.js');

   // echarts
   app.import('./vendor/echarts.min.js');

   // scrollmagic
   app.import('./vendor/shims/scrollmagic.js');

   // TimelineLite
   app.import('./vendor/shims/TimelineLite.js');

   // echarts.js
   app.import('./vendor/shims/echarts.js');

   // TimelineMax
   app.import('./vendor/shims/TimelineMax.js');

   // iscroll
   app.import('./vendor/shims/iscroll.js');

   // imagesloaded
   app.import('./vendor/shims/imagesloaded.js');*/

  return app.toTree();
};
