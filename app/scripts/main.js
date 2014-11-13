(function() {
	'use strict';
	var frame = [
		[75, 300],
		[200, 200],
		[325, 625],
		[450, 550]
	];
	var positions = [],
		i, canvas, ctx, width, height, bounce = -1,
		point, radius = 50;

	canvas = document.getElementById('canvas-container');
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');

	for (i = 0; i < frame.length; i += 1) {
		positions.push({
			x: frame[i][0],
			y: frame[i][1],
			vx: 10,
			vy: 0
		});
	}

	function update() {
		var i, point;
		for (i = 0; i < frame.length; i += 1) {
			point = positions[i];
			point.x += point.vx;
			point.y += point.vy;

			if (point.x > width) {
				point.x = width;
				point.vx *= bounce;
			} else if (point.x < 0) {
				point.x = 0;
				point.vx *= bounce;
			}
			if (point.y > height) {
				point.y = height;
				point.vy *= bounce;
			} else if (point.y < 0) {
				point.y = 0;
				point.vy *= bounce;
			}
		}
	}

	function draw() {
		ctx.clearRect(0, 0, width, height);
		ctx.lineWidth = 1.5;
		ctx.strokeStyle = 'rgb(218, 216, 185)';
		var i, point;
		for (i = 0; i < frame.length; i += 1) {
			point = positions[i];
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(point.x, point.y);
			ctx.stroke();

			// circle
			ctx.beginPath();
			ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
			//if fillstyle is set to transparent text cannot be added to the circle
			//if no fillStyle is specified then 
			//ctx.fillStyle = 'transparent';
			//ctx.fill();
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'rgb(218, 216, 185)';
			ctx.stroke();
		}
	}

	setInterval(function() {
		update();
		draw();
	}, 1000 / 24);
})();