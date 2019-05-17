window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	for(var i = 0; i < 50; i += 1) {
		context.beginPath();
		context.moveTo(Math.random() * width, Math.random() * height);
		context.lineTo(Math.random() * width, Math.random() * height);
		context.stroke();
	}
};

// TO DO
// Add a refresh button to the page ...
// .. when the user clicks refresh the page reloads / sticks are refreshed