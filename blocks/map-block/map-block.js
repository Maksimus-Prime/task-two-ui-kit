import es6bindall from "es6bindall";

class Map {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initMap"];
    es6bindall(this, this.bindMethods);
    this.initData();
    window.initMap = this.initMap;
  }
  initData() {
    this.zoom = $(this.domEl).data("zoom");
    this.lat = +$(this.domEl).data("lat");
    this.lng = +$(this.domEl).data("lng");
    this.icon = $(this).data("marker");
  }
  initMap() {
    const location = {
      lat: this.lat,
      lng: this.lng,
    };
    const mapSettings = {
      zoom: this.zoom,
      center: location,
    };
    const markerSettings = {
      map: markerSettings,
      position: location,
      icon: this.icon,
    };
    const map = new google.maps.Map(this.domEl, mapSettings);
    const marker = new google.maps.Marker(markerSettings);
  }
}

$(".js-map-block__map").each(function () {
  const currentMap = this;
  const el = new Map(currentMap);
});
