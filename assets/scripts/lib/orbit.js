'use strict';

function Ball(speed, angle, radius, x, y) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.radius = radius;
}
Ball.prototype.update = function(centerX, centerY) {
    this.x = centerX + Math.cos(this.angle) * this.radius;
    this.y = centerY + Math.sin(this.angle) * this.radius;
};
Ball.prototype.adjustAngle = function() {
    this.angle += this.speed;
};
module.exports = Ball;
