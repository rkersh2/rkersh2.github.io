'use strict';

var canvas = require('./canvas');
var Particle = require('./particle');
var logo = require('./logo');
var utility = require('./utils');


exports.init = function() {
    window.onload = function() {
        logo.initLogo(canvas.targetContext);
        var pixels = Array.prototype.slice.call(canvas.targetContext.getImageData(0, 0, canvas.width, canvas.width).data);
        var index;
        for (var y = 0, z = canvas.width; y < z; y += 3) {
            for (var x = 0; x < z; x += 3) {
                index = (y * z + x) * 4;
                if(pixels[++index] > 0) {
                    canvas.particleArr.push(new Particle(x, y, 0, 0));
                }
            }
        }
        function make() {
            canvas.context.clearRect(0, 0, canvas.width, canvas.width);
            for(var i = 0, j = canvas.particleArr.length; i < j; i++) {
                var p = canvas.particleArr[i];
                canvas.context.fillRect(p.x, p.y, 2, 2);
            }
            requestAnimationFrame(make);
        }
        make();
    };
};
