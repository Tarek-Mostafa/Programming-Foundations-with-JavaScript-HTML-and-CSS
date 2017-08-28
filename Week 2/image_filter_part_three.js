/*
* A program to change all Blue pixels of an image to Yellow color
* 
* IMPORTANT NOTE: for the code to be executed, 
* Run the code at Duke University Code Environment at this link -> http://www.dukelearntoprogram.com/course1/example/index.php
*/

var img = new SimpleImage('duke_blue_devil.png');

print(img);     // Print original image

function swapBlueGreen(img) {
    var bluePixel;
    for(var pixel of img.values()) {
        bluePixel = pixel.getBlue();
        if(bluePixel < 255) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
}

swapBlueGreen(img);

print(img);     // Print modified image
