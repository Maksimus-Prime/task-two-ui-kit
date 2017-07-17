require("./map-block.less");


var selectMap = document.getElementById("map");

function initMap() {
	var location = {lat: (+selectMap.dataset.lat), lng: (+selectMap.dataset.lng)};
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: (+selectMap.dataset.zoom),
		center: location
	});
	var marker = new google.maps.Marker({
		map: map,
		position: location,
		icon: (selectMap.dataset.marker+"")
	});
}

window.initMap = initMap;