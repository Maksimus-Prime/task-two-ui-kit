require("./youtube-video.less");
require('youtube-iframe');
var YouTubeIframeLoader = require('youtube-iframe');

$('.youtube-video').each(function(i){
	var _self = $(this), // возвращает массив с одним элементом
		videoId = $(this).data('videoid');
	YouTubeIframeLoader.load(function(YT) {
	    new YT.Player(_self[0], {
	        width: "100%",
	        height: "100%",
	        videoId: videoId
	    });
	});
});
