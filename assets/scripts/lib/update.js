'use strict';

var utility = require('./utils');
var canvas = require('./canvas');
var init = require('./init');

exports.update = function () {
    for(var i = 0, j = canvas.particleArr.length; i < j; i++) {
        var p = canvas.particleArr[i];
        if(utility.utils.randomInt(1, 100) < 10) {
            p.x = utility.utils.randomInt(p.x - 5, p.x + 5);
            p.y = utility.utils.randomInt(p.y - 5, p.y + 5);
            p.move();
        }
    }
    init.ball.update(canvas.centerX, canvas.centerY);
};

exports.render = function() {
    canvas.context.clearRect(0, 0, canvas.width, canvas.width);
    for(var i = 0, j = canvas.particleArr.length; i < j; i++) {
        var p = canvas.particleArr[i];
        canvas.context.fillStyle = "#505050";
        canvas.context.fillRect(p.x, p.y, 2, 2);
    }
    canvas.context.beginPath();
    canvas.context.arc(init.ball.x, init.ball.y, 3, 0, Math.PI * 2, false);
    canvas.context.fillStyle = "#505050";
    canvas.context.fill();
    init.ball.adjustAngle();
};
