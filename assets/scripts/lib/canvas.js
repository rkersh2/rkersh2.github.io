'use strict';
// canvas
exports.image = document.getElementById('source');
exports.canvas = document.getElementById('canvas');
exports.targetCanvas = document.getElementById('target');
// context
exports.context = exports.canvas.getContext('2d');
exports.targetContext = exports.targetCanvas.getContext('2d');
// dimensions
exports.width = exports.canvas.width = exports.targetCanvas.width = window.innerWidth;
exports.height = exports.canvas.height = exports.targetCanvas.height = window.innerHeight;
exports.centerX = exports.width / 2;
exports.centerY = exports.height / 2;
exports.centerXAdjusted = exports.centerX - 150; // this is half the targets width
exports.centerYAdjusted = exports.centerY - 150; // same for height
// global variables, objects and arrays
exports.particleArr = [];
exports.mouse = {};
document.body.addEventListener("mousemove", function(event) {
    exports.mouse.x = event.clientX;
    exports.mouse.y = event.clientY;
});
exports.mouseRadius = Math.pow(100, 2);
exports.friction = 0.95;
exports.ease = 0.25;
