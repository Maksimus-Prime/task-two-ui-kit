var YouTubeIframeLoader = require("youtube-iframe");

$(".js-youtube-video").each(function(){
  var _self = $(this),
    videoId = $(this).data("videoid");
  YouTubeIframeLoader.load(function(YT) {
    new YT.Player(_self[0], {
      width: "100%",
      height: "100%",
      videoId: videoId
    });
  });
});
