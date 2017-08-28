/*
* A Program that takes an image and add a 10 pixel black border to it 
*
* IMPORTANT NOTE: for the code to be executed, 
* Run the code at Duke University Code Environment at this link -> http://www.dukelearntoprogram.com/course1/example/index.php
*/

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

function addBorder(img) {
    for(var pixel of img.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        
        // Top border
        if(x < img.getWidth() && y < 10) {
            setBlack(pixel);
        }
        
        // Left border
        else if(x < 10 && y < img.getHeight()) {
            setBlack(pixel);
        }
        
        // Bottom border
        else if(y >= img.getHeight() - 10) {
            setBlack(pixel);
        }
        
        // Right border
        else if(x >= img.getWidth() - 10) {
            setBlack(pixel);
        }
    }
    return img;
}

var originalImage = new SimpleImage('smallpanda.png');      // Original image
var imageModify = new SimpleImage('smallpanda.png');        // Image to be modified
var modifiedImage = addBorder(imageModify);                 // Modified image

print(modifiedImage);
