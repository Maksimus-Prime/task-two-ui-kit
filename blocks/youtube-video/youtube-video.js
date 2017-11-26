import es6bindall from "es6bindall";

const YouTubeIframeLoader = require("youtube-iframe");

class YoutubeVideo {
  constructor(domEl) {
    this.domEl = domEl;
    this.bindMethods = ["initData", "getPlayerSettings", "initYoutubeVideo"];
    es6bindall(this, this.bindMethods);
    this.initData();
    this.initYoutubeVideo();
  }
  initData() {
    this.videoId = $(this.domEl).data("videoid");
  }
  initYoutubeVideo() {
    YouTubeIframeLoader.load(this.getPlayerSettings);
  }
  getPlayerSettings(YT) {
    const settings = new YT.Player(this.domEl, {
      width: "100%",
      height: "100%",
      videoId: this.videoId,
    });
    return settings;
  }
}
/* eslint-disable no-unused-vars, func-names */
$(".js-youtube-video").each(function () {
  const currentYoutubeVideo = this;
  const el = new YoutubeVideo(currentYoutubeVideo);
});
/* eslint-disable no-unused-vars, func-names */
