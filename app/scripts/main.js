(function(){
	'use strict';

	window.requestAnimFrame = (function(callback) {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
		})();

	var canvas = document.getElementById('myCanvas'),
		canvasW = canvas.width,
		canvasH = canvas.height,
		ctx = canvas.getContext('2d');

    var requestId;

    var words = ['hello01', 'hello02', 'hello03', 'hello04' ],
		posX = 0,
		radius = 50,
		pixelsPerFrame = 5,
		text;

    function draw(posX){
		for(var i = 0; i < words.length; i++){
			ctx.beginPath();
			ctx.moveTo(posX, 0);
			ctx.lineTo(200, 200);
			ctx.lineWidth = 2;
			ctx.lineCap = 'round';
			ctx.strokeStyle = '#fff';
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(200, 200, radius, 0, 2 * Math.PI, false);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#fff';
			ctx.stroke();

			text = words[0];
			ctx.font = 'italic 20px Calibri';
			ctx.textAlign = 'center';
			ctx.textBasline = 'middle';
			ctx.fillStyle = '#fff';
			ctx.fillText(text, 200, 200);
		}
 }

	function animate(){
		requestId = requestAnimationFrame(animate);

		if(posX <= canvas.width) {
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// ctx.fillRect(posX, 0, boxWidth, canvas.height);
			posX += pixelsPerFrame;
			draw(posX);
			
		} else {
			cancelAnimationFrame(requestId);
		}
	}


	requestAnimationFrame(animate);	
})();