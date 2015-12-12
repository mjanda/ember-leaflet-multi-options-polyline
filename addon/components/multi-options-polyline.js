import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({
  leafletRequiredOptions: [
    'latlngs',
    'options'
  ],

  leafletProperties: [
    'latlngs:setLatLngs'
  ],

  createLayer() {
    return new this.L.MultiOptionsPolyline(...this.get('requiredOptions'));
  }
});
