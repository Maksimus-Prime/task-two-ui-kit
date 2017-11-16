const YouTubeIframeLoader = require("youtube-iframe");
import es6bindall from "es6bindall";

class YoutubeVideo {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initData", "initYoutubeVideo"];
    es6bindall(this, this.bindMethods);
    this.initData();
    this.initYoutubeVideo();
  }
  initData() {
    this.videoId = $(this.domEl).data("videoid");
  }
  initYoutubeVideo() {
    YouTubeIframeLoader.load((YT) => {
      new YT.Player(this.domEl, {
        width: "100%",
        height: "100%",
        videoId: this.videoId
      });
    });
  }
}

$(".js-youtube-video").each(function(){
  const currentYoutubeVideo = $(this)[0];
  const el = new YoutubeVideo(currentYoutubeVideo);  
});
