require("./map-block.less");

function initMap() {
	var location = {lat: 56.501, lng: 84.992};
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 14,
		center: location
	});
	var marker = new google.maps.Marker({
		map: map,
		position: location,
		icon: "img/map-marker-icon.png"
	});
}

