# epd7x5

A Node.js package for the 7.5 inch waveshare epaper display.

## Dependencies

## Installation

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

## License

Apache 2.0