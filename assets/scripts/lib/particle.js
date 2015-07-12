'use strict';

var canvas = require('./canvas');

function Particle (x, y) {
    this.x = this.originX = x;
    this.y = this.originY = y;
    this.rx = 0;
    this.ry = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.time = 0;
    this.distance = this.x * this.x + this.y * this.y;
}
Particle.prototype.update = function(mx, my, mr, f, e) {
    this.distance = (this.rx = mx - this.x) * this.rx + (this.ry = my - this.y) * this.ry;
    this.force = -mr / this.distance;
    if(this.distance < mr) {
        this.time = Math.atan2(this.ry, this.rx);
        this.vx += this.force * Math.cos(this.time);
        this.vy += this.force * Math.sin(this.time);
    }
    this.x += (this.vx *= f) + (this.originX - this.x) * e;
    this.y += (this.vy *= f) + (this.originY - this.y) * e;
};
module.exports = Particle;
