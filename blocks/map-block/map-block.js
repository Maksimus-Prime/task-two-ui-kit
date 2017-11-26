import es6bindall from "es6bindall";

class Map {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initData", "initSettings", "initMap"];
    es6bindall(this, this.bindMethods);
    this.initData();
    this.initSettings();
    window.initMap = this.initMap;
  }
  initData() {
    this.zoom = $(this.domEl).data("zoom");
    this.lat = +$(this.domEl).data("lat");
    this.lng = +$(this.domEl).data("lng");
    this.icon = $(this.domEl).data("marker");
  }
  initSettings() {
    this.location = {
      lat: this.lat,
      lng: this.lng,
    };
    this.mapSettings = {
      zoom: this.zoom,
      center: this.location,
    };
    this.markerSettings = {
      position: this.location,
      map: this.mapSettings,
      icon: this.icon,
    };
  }
  initMap() {
    const map = new google.maps.Map(this.domEl, this.mapSettings);
    const marker = new google.maps.Marker(this.markerSettings);
  }
}
/* eslint-disable no-unused-vars, func-names */
$(".js-map-block__map").each(function () {
  const currentMap = this;
  const el = new Map(currentMap);
});
/* eslint-disable no-unused-vars, func-names */
