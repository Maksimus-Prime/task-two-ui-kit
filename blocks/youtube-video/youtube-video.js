require("./youtube-video.less");
require('youtube-iframe');
var YouTubeIframeLoader = require('youtube-iframe');

//var width = ""+videoContainer.dataset.width, height = ""+videoContainer.dataset.height;
//videoId=""+videoContainer.dataset.videoid;


var videoContainer = document.getElementById('video-placeholder');
// Здесь позже запилить функцию которая у каждого элемента с классом video дергает id-шник и настройки: ширина, высота, айдишник
YouTubeIframeLoader.load(function(YT) {
    new YT.Player(videoContainer, {
        width: "100%",
        height: "100%",
        videoId: videoContainer.dataset.videoid
    });
});