var music;
var audio;

function play() {
    document.getElementById("balloon1").style.visibility = "unset";
    document.getElementById("balloon2").style.visibility = "unset";
    document.getElementById("marquee").style.visibility = "unset";
    document.getElementById("stop").style.visibility = "unset";
    audio = new Audio('wish.mp3');
    audio.play();
    music.pause()
}

function stop1() {
    audio.pause()
    document.getElementById("balloon1").style.visibility = "hidden";
    document.getElementById("balloon2").style.visibility = "hidden";
    document.getElementById("marquee").style.visibility = "hidden";
    document.getElementById("stop").style.visibility = "hidden";
}

function musicPlay() {
    music = new Audio('song.mp3');
    music.play();
}

var image = [
    "Layer 0.png",
    "Layer 1.png",
    "Layer 2.png",
    "Layer 3.png",
    "Layer 4.png",
    "Layer 5.png"
  ];

  var i = 0;

function revealMore() {

    if (i == 6)
    {
      i=0;
    }
  document.getElementById("cakeReveal").src = image[i];
  i++;
}
