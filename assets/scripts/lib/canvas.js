'use strict';

exports.canvas = document.getElementById('canvas');
exports.targetCanvas = document.getElementById('target');
exports.context = exports.canvas.getContext('2d');
exports.targetContext = exports.targetCanvas.getContext('2d');
exports.width = exports.targetCanvas.width = exports.canvas.width = 300;
exports.height = exports.targetCanvas.height = exports.canvas.height = 300;
exports.particleArr = [];
