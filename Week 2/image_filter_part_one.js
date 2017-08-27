/*
* A program which makes a filter to an image
* the first 1/3 part is filtered with Red
* the middle 1/3 part is filtered with Green
* the last 1/3 part is filtered with Blue
* 
* IMPORTANT NOTE: for the code to be executed, 
* Run the code at Duke University Code Environment at this link -> http://www.dukelearntoprogram.com/course1/example/index.php
*/

var img = new SimpleImage('hilton.jpg');

print(img);		// Print original image

var width = img.getWidth();	// Get the width of image

for (var pixel of img.values()) {
	// Change the first 1/3 part of image to red
    if(pixel.getX() <= (width / 3)) {
        pixel.setRed(255);
    }
    
    // Change the middle 1/3 part of image to green
    if (pixel.getX() > (width / 3) && pixel.getX() <= (width * 2 / 3)) {
        pixel.setGreen(255);
    }
    
    // Change the last 1/3 part of image to blue
    if(pixel.getX() > (width * 2 / 3)) {
        pixel.setBlue(255);
    }
}

print(img);		// Print modified image
