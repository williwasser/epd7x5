const epd7x5 = require('./build/Release/epd7x5');
const gd = require('node-gd');


let width = 640;
let height = 384;


function getImageBuffer(){
	let img = gd.createSync(width, height);
	for (let i=0; i<256; i++) img.colorAllocate(255-i, 255-i, 255-i); 	
	return img;
}



function displayImageBuffer(img){

	let imageData = new Buffer(width * height );
	for(let y = 0; y < height; y++) { 
		for(let  x = 0; x<width;x++){
			imageData[x + y * width] = img.getPixel(x, y);
		}
	}

	let buf = new Buffer(width * height/2 ); 
	for(let i = 0; i < width * height-1; i+=2) { 
		if (imageData[i] < 64)
			if (imageData[i+1] < 64)
				buf[i/2] = 0x33;
			else if (imageData[i+1] < 192)
				buf[i/2] = 0x34;
			else
				buf[i/2] = 0x30; 
		else if (imageData[i] < 192) { 
			if (imageData[i+1] < 64)
				buf[i/2] = 0x43;
			else if (imageData[i+1] < 192)
				buf[i/2] = 0x44;
			else	
				buf[i/2] = 0x40;		
		}
		else
			if (imageData[i+1] < 64)
				buf[i/2] = 0x03;
			else if (imageData[i+1] < 192)
				buf[i/2] = 0x04;
			else
				buf[i/2] = 0x00; 
		

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
