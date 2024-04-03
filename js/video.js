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

// Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function() {
	console.log("Mute clicked")
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "unmute";
	}
	else{
		VideoPlaybackQuality.muted = false;
		document.getElementById("mute").innerHTML = "mute";
		video.muted = false;
	}
});

// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function() {
	document.getElementById("volume").innerHTML = document.querySelector("#slider").value;
	video.volume = document.querySelector("#slider").value / 100;
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("oldschool clicked")
	video.className="oldSchool";

});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	console.log("original clicked")
	video.className="video";
});