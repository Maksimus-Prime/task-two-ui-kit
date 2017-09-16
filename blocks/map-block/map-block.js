require("./map-block.less");

$('.map').each(function(i){
    var _self = $(this),
        lat = $(this).data("lat"),
        lng = $(this).data("lng"),
        zoom = $(this).data("zoom"),
        icon = $(this).data("icon");
    function initMap() {
        var location = {lat: lat, lng: lng};
        var map = new google.maps.Map(_self[0],{
            zoom: zoom,
            center: location
        });
        var marker = new google.maps.Marker({
            map: map,
            position: location,
            icon: icon
        });
    }

    window.initMap = initMap;
});