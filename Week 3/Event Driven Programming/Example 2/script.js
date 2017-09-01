function doColor() {
	var d1 = document.getElementById("d1");
	var btn = document.getElementById("clr");
	var color = btn.value;
	
	d1.style.backgroundColor = color;
}

function btnDoColor() {
	var d1 = document.getElementById("d1");
	
	d1.style.backgroundColor = "rgb(223, 27, 21)";
}

function doSlider() {
	var d1 = document.getElementById("d1");
	var sldr = document.getElementById("sldr");
	var sldrValue = sldr.value;
	var ctx = d1.getContext("2d");
	var x = 10;
	var y = 10;
	
	ctx.clearRect(0, 0, d1.width, d1.height);
	ctx.fillStyle = "green";
	ctx.fillRect(parseInt(sldrValue) * 0 + 10, y, sldrValue, sldrValue/2);
	ctx.fillRect(parseInt(sldrValue) + 20, y, sldrValue, sldrValue/2);
	ctx.fillRect(parseInt(sldrValue) * 2 + 30, y, sldrValue, sldrValue/2);
}
