/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-multi-options-polyline',
  included: function(app) {
   //import javascript
   app.import(app.bowerDirectory + '/Leaflet.MultiOptionsPolyline/Leaflet.MultiOptionsPolyline.js');
  }
};
