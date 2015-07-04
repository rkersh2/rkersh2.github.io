"use strict";

var init = require('./lib/init');
var update = require('./lib/update');
window.onload = function() {
    init.init();
    function animate() {
        update.update();
        update.render();
        requestAnimationFrame(animate);
    }
    animate();
};
