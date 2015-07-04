'use strict';

exports.image = document.getElementById('source');
exports.canvas = document.getElementById('canvas');
exports.targetCanvas = document.getElementById('target');
exports.context = exports.canvas.getContext('2d');
exports.targetContext = exports.targetCanvas.getContext('2d');
exports.width = exports.canvas.width = exports.targetCanvas.width = window.innerWidth;
exports.height = exports.canvas.height = exports.targetCanvas.height = window.innerHeight;
exports.centerX = exports.width / 2;
exports.centerY = exports.height / 2;
exports.centerXAdjusted = exports.centerX - 150; // this is half the targets width
exports.centerYAdjusted = exports.centerY - 150; // same for height
exports.particleArr = [];
