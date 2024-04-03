// link video class to video variable
var video = document.querySelector(".video");

// turn off video autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.pause();
	video.autoplay = false;
	video.autostart=false;
	video.loop = false;
});

// play button starts to play and updates the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = document.getElementById("slider").value;
	document.querySelector("#volume").innerHTML = volume;
});

// pause the video onclick pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked
// and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = Math.max(0, video.playbackRate - 0.1);
	console.log("playback rate: ", video.playbackRate);
});

// Increase the current video speed each time the button is clicked 
// and log the new speed to the console.  Change it by an amount 
// proportional to the slow down.
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = Math.min(1.0, video.playbackRate + 0.1);
	console.log("playback rate: ", video.playbackRate);
});

// Advance the current video by 10 seconds. If the video 
// length has been exceeded go back to the start of the video - no farther.
// Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	var timestampTime = video.currentTime;
	var duration = video.duration;
	if (timestampTime + 10 >= duration){
		video.currentTime = 0;
		console.log("skipped past the end - timestamp is " + video.currentTime)
	}
	else{
		video.currentTime += 10;
		console.log("skipped forward 10 seconds - timestamp is " + video.currentTime)
	}
});