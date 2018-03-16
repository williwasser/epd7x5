const epd7x5 = require('./build/Release/epd7x5');
const gd = require('node-gd');

let width = 640;
let height = 384;

function getImageBuffer(){
	let img = gd.createSync(width, height);
	for (let i=0; i<256; i++) img.colorAllocate(i, i, i); 	
	return img;
}

function displayImageBuffer(img){

	let buf = new Buffer(width * height/2);
	for(let y = 0; y < height; y++) { 
		for(let  x = 0; x<width-1; x+=2){
			let pixel_0 = img.getPixel(x, y);
			let pixel_1 = img.getPixel(x+1, y);
			
			if (pixel_0 < 64)
				if (pixel_1 < 64)
					buf[(y*width+x)/2] = 0x33;
				else if (pixel_1 < 192)
					buf[(y*width+x)/2] = 0x34;
				else
					buf[(y*width+x)/2] = 0x30; 
			else if (pixel_0 < 192) 
				if (pixel_1 < 64)
					buf[(y*width+x)/2] = 0x43;
				else if (pixel_1 < 192)
					buf[(y*width+x)/2] = 0x44;
				else	
					buf[(y*width+x)/2] = 0x40;		
			else
				if (pixel_1 < 64)
					buf[(y*width+x)/2] = 0x03;
				else if (pixel_1 < 192)
					buf[(y*width+x)/2] = 0x04;
				else
					buf[(y*width+x)/2] = 0x00; 
			
		}
	}


	epd7x5.displayFrame(buf);
	img.destroy();
}

exports.getImageBuffer = getImageBuffer;
exports.displayImageBuffer = displayImageBuffer;
exports.init = epd7x5.init;
exports.white = 32;
exports.red = 128;
exports.black = 224;	
exports.width = width;
exports.height = height;
exports.gd = gd;

