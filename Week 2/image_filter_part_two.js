/*
* A program to swap a Green pixel with a Red pixel in an image
* 
* IMPORTANT NOTE: for the code to be executed, 
* Run the code at Duke University Code Environment at this link -> http://www.dukelearntoprogram.com/course1/example/index.php
*/

var img = new SimpleImage('drewgreen.png');

function swapRedGreen(pixel) {
    var r = pixel.getRed();     // Get the red value of the pixel
    var g = pixel.getGreen();   // Get the green value of the pixel
    pixel.setRed(g);            // Swap red with green
    pixel.setGreen(r);          // Swap green with red
}

var testPixel = img.getPixel(50,50);    // Pixel to test

print(testPixel);
print(img);		// Print original image

swapRedGreen(testPixel);

print(testPixel);	// Red and Green pixels should be swaped now
print(img);		// Print modified image
