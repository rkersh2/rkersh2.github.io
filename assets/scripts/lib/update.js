'use strict';

var utility = require('./utils');
var canvas = require('./canvas');
var init = require('./init');

exports.update = function () {
    for(var i = 0, j = canvas.particleArr.length; i < j; i++) {
        var p = canvas.particleArr[i];
        //if(utility.utils.randomInt(1, 100) < 20) {
        //    p.x = utility.utils.randomInt(p.originX - 5, p.originX + 5);
        //    p.y = utility.utils.randomInt(p.originY - 5, p.originY + 5);
        //}
        p.update(canvas.mouse.x, canvas.mouse.y, canvas.mouseRadius, canvas.friction, canvas.ease);
    }
    init.ball.update(canvas.centerX, canvas.centerY);
};
exports.render = function() {
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
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
