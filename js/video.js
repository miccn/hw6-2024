// link video class to video variable
var video = document.querySelector(".video");

// turn off video autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// play button starts to play and updates the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = document.getElementById("slider").value;
	document.querySelector("#volume").innerHTML = volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

