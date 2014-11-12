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
		context = canvas.getContext('2d');

	var radius = 50,
		text = '',
        words = ['hello01', 'hello02', 'hello03', 'hello04' ],
        array = [[75, 100], [200, 100], [325, 100], [450, 100]];

	function drawData() {
		context.save();
		context.clearRect(0,0, canvas.width, canvas.height);
		var startX;

		for(var k = 0; k < array.length; k++){
			startX = array[k][0];
		}
		for(var i = 0; i < array.length; i++){
			// draw lines
			context.beginPath();
			context.moveTo(startX, 0);
			context.lineTo(array[i][0], array[i][1]);
			context.lineWidth = 2;
			context.lineCap = 'round';
			context.strokeStyle = '#fff';
			context.stroke();

			// circle
			context.beginPath();
			context.arc(array[i][0] += 6, array[i][1] += radius, radius, 0, 2 * Math.PI, false);
			context.lineWidth = 2;
			context.strokeStyle = '#fff';
			context.stroke();

			//draw text
			text = words[i];
			context.font = 'italic 20px Calibri';
			context.textAlign = 'center';
			context.textBasline = 'middle';
			context.fillStyle = '#fff';
			context.fillText(text, array[i][0], array[i][1]);

			//get metrics
			var metrics = context.measureText(text),
				width = metrics.width;
			context.font = 'italic 20px Calibri';
			context.textAlign = 'center';
			context.fillStyle = '#fff';
			context.fillText(width, array[i][0], array[i][1] + 20);


		}
		 requestAnimationFrame(drawData);
	}

	requestAnimationFrame(drawData);


	
	
})();