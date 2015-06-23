'use strict';

var canvas = require('./canvas');

exports.make = function() {
    canvas.context.clearRect(0, 0, canvas.width, canvas.width);
    for(var i = 0; i < canvas.particleArr.length; i++) {
        var p = canvas.particleArr[i];
        canvas.context.fillRect(p.x, p.y, 2, 2);
    }
    requestAnimationFrame(make);
};
