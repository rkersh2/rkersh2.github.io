'use strict';

function Particle (x, y) {
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
}
Particle.prototype.move = function() {
    this.vx = this.x - this.originX;
    this.vy = this.y - this.originY;
    this.x += this.vx;
    this.y += this.vy;
    if(this.originX !== this.x || this.originY !== this.y) {
        if(this.x > this.originX + 4) {
            this.x = this.originX;
        } else if(this.x < this.originX - 4) {
            this.x = this.originX;
        }
        if(this.y > this.originY + 4) {
            this.y = this.originY;
        } else if(this.y < this.originY - 4) {
            this.y = this.originY;
        }
    }
};
module.exports = Particle;
