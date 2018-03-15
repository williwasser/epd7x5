# epd7x5

A Node.js package for the 7.5inch e-Paper HAT(B) waveshare display on a Raspberry Pi 2/3/zero
[Link to waveshare wiki](https://www.waveshare.com/wiki/7.5inch_e-Paper_HAT_(B))

## Dependencies
1. WiringPi for GPIO access of Raspberry Pi
2. libgd2 for the drawing

## Installation
WiringPi: follow installation on [wiringpi.com](http://wiringpi.com/download-and-install/)

libgd2: sudo apt-get install libgd2-dev # libgd

epd7x5: npm install epd7x5


## Usage

```javascript
const epd7x5 = require('epd7x5');

//init the module
epd7x5.init();

//get a gd image of 640 x 384 Pixels for drawing
var img = epd7x5.getImageBuffer() ;

//load some fonts
let font = '/home/pi/epd_test/ARIAL.TTF';

//draw content with node-gd functions
img.stringFT(epd7x5.black, font, 64, -0.0, 5, 100, 'Hello EPD 7x5!');
img.stringFT(epd7x5.red, font, 64, -0.0, 5, 200, 'Hello EPD 7x5!');
img.filledRectangle(0, 220, 640, 310, epd7x5.red)
img.stringFT(epd7x5.white, font, 64, -0.0, 5, 300, 'Hello EPD 7x5!');

//send the image for display
epd7x5.displayImageBuffer(img);
```

The module exports the following functions and constants:

### Functions:
epd7x5.init()

epd7x5.getImageBuffer() 

epd7x5.displayImageBuffer(img)

### Constants:
epd7x5.white

epd7x5.red

epd7x5.black
	
epd7x5.width

epd7x5.height

### gd namespace for direct access of gd functions
epd7x5.gd

Documentation of node-gd functions can be found [here](https://y-a-v-a.github.io/node-gd/)

## License

Apache 2.0