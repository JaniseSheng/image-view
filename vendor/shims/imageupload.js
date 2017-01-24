(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['ImageUploader'] };
  }

  define('ImageUploader', [], vendorModule);
})();
