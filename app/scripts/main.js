(function(){
	'use strict';

	window.requestAnimFrame = (function(callback) {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
		})();

	var canvas = document.getElementById('canvas-container'),
		ctx = canvas.getContext('2d'),
		// get window dimensions
		W = window.innerWidth,
		H = window.innerHeight;

	//set canvas dimensions to window dimensions
	canvas.width = W;
	canvas.height = H;

	var requestId;

	var frame = [[75, 100], [200, 100], [325, 100], [450, 100], [525, 100]],
		words = ['hello01', 'hello02', 'hello03', 'hello04' ],
		posX = 0,
		radius = 50,
		pixelsPerFrame = 5,
		text;

    function draw(posX, posY){ 
		for(var i = 0; i < frame.length; i++){
			ctx.beginPath();
			ctx.moveTo(posX, 0);
			ctx.lineTo(frame[i][0], 200);
			ctx.lineWidth = 2;
			ctx.lineCap = 'round';
			ctx.strokeStyle = '#fff';
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(frame[i][0], 200, radius, 0, 2 * Math.PI, false);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#fff';
			ctx.stroke();

			text = words[0];
			ctx.font = 'italic 20px Calibri';
			ctx.textAlign = 'center';
			ctx.textBasline = 'middle';
			ctx.fillStyle = '#fff';
			ctx.fillText(text, frame[i][0], 200);
		}
	}

	function animate(){
		requestId = requestAnimationFrame(animate);
		// get last x position of the array
		var last = frame[frame.length - 1],
			upperBound = last[0];
		if(posX <= upperBound) {
			//clear canvas and increment x position
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			posX += pixelsPerFrame;
			draw(posX);								
		} else {
			// reset position back to zero to create an infinite loop
			posX = 0;
			draw(posX);
		}
	}


	requestAnimationFrame(animate);	
})();