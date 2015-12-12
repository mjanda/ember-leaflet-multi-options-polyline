/*jshint node:true*/
module.exports = {
  description: 'add hgoebl/Leaflet.MultiOptionsPolyline bower package',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
   // this prevents an error when the entityName is
   // not specified (since that doesn't actually matter
   // to us
  },

  afterInstall: function(options) {
   return this.addBowerPackageToProject('Leaflet.MultiOptionsPolyline', 'https://github.com/hgoebl/Leaflet.MultiOptionsPolyline.git#0.8.1');
  }
};
