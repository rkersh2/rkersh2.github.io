'use strict';

var canvas = require('./canvas');
var particle = require('./particle');
var logo = require('./logo');
var animate = require('./animate');


exports.init = function() {
    window.onload = function() {
        logo.initLogo(canvas.targetContext);
        var pixels = Array.prototype.slice.call(canvas.targetContext.getImageData(0, 0, canvas.width, canvas.width).data);
        var index;
        for (var y = 0; y < canvas.width; y += 3) {
            for (var x = 0; x < canvas.width; x += 3) {
                index = (y * canvas.width + x) * 4;
                if(pixels[++index] > 0) {
                    canvas.particleArr.push(particle.particle.createPar(x, y, 0, 0));
                }
            }
        }
        animate.make();
    };
};
