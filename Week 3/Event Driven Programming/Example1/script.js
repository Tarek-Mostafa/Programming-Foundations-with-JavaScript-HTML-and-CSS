var d1 = document.getElementById("d1");

function doRed() {
	d1.style.backgroundColor = "red";
	var ctx = d1.getContext("2d");
	ctx.fillStyle = "#333";
	ctx.fillRect(10, 10, 50, 30);
	ctx.font = "16px Helvetica";
	ctx.fillStyle = "#fff";
	ctx.fillText("Hello", 15, 30);
}

function doGrey() {
	d1.style.backgroundColor = "grey";
	var ctx = d1.getContext("2d");
	ctx.clearRect(0, 0, d1.width, d1.height);
}
