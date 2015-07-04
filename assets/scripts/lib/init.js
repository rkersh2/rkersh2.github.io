'use strict';

var canvas = require('./canvas');
var Particle = require('./particle');
var Orbit = require('./orbit');

exports.init = function() {
    // init logo & it's data
    canvas.targetContext.drawImage(canvas.image, canvas.centerXAdjusted, canvas.centerYAdjusted);
    var pixels = canvas.targetContext.getImageData(0, 0, canvas.width, canvas.height).data;
    // init orbit
    exports.ball = new Orbit(0.01, 0, 350);
    // init particle array
    var index;
    for (var y = 0, h = canvas.height; y < h; y += 3) {
        for (var x = 0, w = canvas.width; x < w; x += 3) {
            index = (y * w + x) * 4;
            if(pixels[++index] > 0) {
                canvas.particleArr.push(new Particle(x, y, 0, 0));
            }
        }
    }
};
