"use strict";

exports.utils = {
    randomInt: function(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    }
};
