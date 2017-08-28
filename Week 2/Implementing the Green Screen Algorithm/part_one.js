/*
* A program that takes an image with a green background
* Outputs an image that converts that green background to a specified image
* 
* IMPORTANT NOTE: for the code to be executed, 
* Run the code at Duke University Code Environment at this link -> http://www.dukelearntoprogram.com/course1/example/index.php
*/

var fgImg = new SimpleImage('drewRobert.png');		// Main image with green background
var bgImg = new SimpleImage('dinos.png');				// The image that replaces the green background
bgImg.setSize(fgImg.getWidth(), fgImg.getHeight());		// Make sure the background image is the same size as the main image

var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());

for(var pixel of fgImg.values()) {
    if(pixel.getGreen() > pixel.getBlue() + pixel.getRed()) {
        var x = pixel.getX();
        var y = pixel.getY();
        var z = bgImg.getPixel(x, y);
        output.setPixel(x,y,z)
    }
    
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel)
    }
}

print(output);
