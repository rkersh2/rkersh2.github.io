'use strict';

function Particle (x, y) {
    this.x = this.originX = x;
    this.y = this.originY = y;
    this.rx = 0;
    this.ry = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.angle = 0;
    this.distance = 0;
}
Particle.prototype.update = function(mx, my, mr, f, e) {
    this.rx = mx - this.x;
    this.ry = my - this.y;
    this.distance = this.rx * this.rx + this.ry * this.ry;
    this.force = -mr / this.distance;
    if(this.distance < mr) {
        this.angle = Math.atan2(this.ry, this.rx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
    }
    this.x += (this.vx *= f) + (this.originX - this.x) * e;
    this.y += (this.vy *= f) + (this.originY - this.y) * e;
};
module.exports = Particle;
