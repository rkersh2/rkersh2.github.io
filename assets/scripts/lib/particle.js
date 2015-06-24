'use strict';

function Particle (x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(direction) * speed;
    this.vy = Math.sin(direction) * speed;
}
var particle = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    update: function() {
        this.x += this.vx;
        this.y += this.vy;
    }
};
Particle.prototype = particle;
module.exports = Particle;
