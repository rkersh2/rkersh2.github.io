'use strict';

function Particle (x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(direction) * speed;
    this.vy = Math.sin(direction) * speed;
}
Particle.prototype.update = function() {
        this.x += this.vx;
        this.y += this.vy;
};
module.exports = Particle;
