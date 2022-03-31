import throttle from "lodash.throttle";
const iframe = document.getElementById("vimeo-player");
const STORAGE_PLAYER_KEY = "videoplayer-current-time";

const player = new Vimeo.Player(iframe);
const onPlay = function (data) {
    localStorage.setItem(STORAGE_PLAYER_KEY, data.seconds);
    console.log(parseInt(localStorage.getItem(STORAGE_PLAYER_KEY)));
  };

player.on("timeupdate", throttle(onPlay, 1000));
player
  .setCurrentTime(localStorage.getItem(STORAGE_PLAYER_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        break;
      default:
        break;
    }
  });
