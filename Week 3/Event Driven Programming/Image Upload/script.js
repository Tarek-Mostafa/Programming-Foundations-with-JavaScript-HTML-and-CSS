function upload() {
	var uploadInput = document.getElementById("btnUpload");
	var image = new SimpleImage(uploadInput);
	var canvas = document.getElementById("can");
	
	image.drawTo(canvas);
}
