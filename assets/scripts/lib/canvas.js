'use strict';

exports.canvas = document.getElementById('canvas');
exports.targetCanvas = document.getElementById('target');
exports.orbit = document.getElementById('orbit');
exports.context = exports.canvas.getContext('2d');
exports.targetContext = exports.targetCanvas.getContext('2d');
exports.orbitContext = exports.orbit.getContext('2d');
exports.width = exports.targetCanvas.width = exports.canvas.width = 300;
exports.height = exports.targetCanvas.height = exports.canvas.height = 300;
exports.orbitWidth = exports.orbit.width = window.innerWidth;
exports.orbitHeight = exports.orbit.height = window.innerHeight;
exports.center = exports.width / 2;
exports.orbitCenterX = exports.orbitWidth / 2;
exports.orbitCenterY = exports.orbitHeight / 2;
exports.particleArr = [];
