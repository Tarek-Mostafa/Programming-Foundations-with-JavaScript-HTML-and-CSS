/*
* A program to change all Blue pixels of an image to Yellow color
* 
* IMPORTANT NOTE: for the code to be executed, 
* Run the code at Duke University Code Environment at this link -> http://www.dukelearntoprogram.com/course1/example/index.php
*/

var img = new SimpleImage('duke_blue_devil.png');

print(img);     // Print original image

function swapBlueGreen(img) {
    var redCor = 0;     // Red value of the color 'Blue'
    var greenCor = 51;  // Green value of the color 'Blue'
    var blueCor = 227;  // Blue value of the color 'Blue'

    for(var pixel of img.values()) {
        // Blue pixels have a greater Blue value than the Green and Red
        // So if the blue value is greater than Red plus Green then it must be a Blue pixel
        if(pixel.getBlue() > pixel.getRed() + pixel.getGreen()) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
}

swapBlueGreen(img);

print(img);     // Print modified image
