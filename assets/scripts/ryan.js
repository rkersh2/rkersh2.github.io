!function t(e,i,n){function r(a,o){if(!i[a]){if(!e[a]){var c="function"==typeof require&&require;if(!o&&c)return c(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var h=i[a]={exports:{}};e[a][0].call(h.exports,function(t){var i=e[a][1][t];return r(i?i:t)},h,h.exports,t,e,i,n)}return i[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(t,e,i){"use strict";var n=t("./lib/init"),r=t("./lib/update");window.onload=function(){function t(){r.update(),r.render(),requestAnimationFrame(t)}n.init(),t()}},{"./lib/init":3,"./lib/update":6}],2:[function(t,e,i){"use strict";i.image=document.getElementById("source"),i.canvas=document.getElementById("canvas"),i.targetCanvas=document.getElementById("target"),i.context=i.canvas.getContext("2d"),i.targetContext=i.targetCanvas.getContext("2d"),i.width=i.canvas.width=i.targetCanvas.width=window.innerWidth,i.height=i.canvas.height=i.targetCanvas.height=window.innerHeight,i.centerX=i.width/2,i.centerY=i.height/2,i.centerXAdjusted=i.centerX-150,i.centerYAdjusted=i.centerY-150,i.particleArr=[],i.mouse={},document.body.addEventListener("mousemove",function(t){i.mouse.x=t.clientX,i.mouse.y=t.clientY}),document.body.addEventListener("touchstart",function(t){i.mouse.x=t.changedTouches[0].clientX,i.mouse.y=t.changedTouches[0].clientY},!1),document.body.addEventListener("touchmove",function(t){t.preventDefault(),i.mouse.x=t.targetTouches[0].clientX,i.mouse.y=t.targetTouches[0].clientY},!1),document.body.addEventListener("touchend",function(t){t.preventDefault(),i.mouse.x=1,i.mouse.y=1},!1),window.onresize=function(){location.reload()},i.mouseRadius=Math.pow(100,2),i.friction=.95,i.ease=.25},{}],3:[function(t,e,i){"use strict";var n=t("./canvas"),r=t("./particle"),s=t("./orbit");i.init=function(){n.targetContext.drawImage(n.image,n.centerXAdjusted,n.centerYAdjusted);var t=n.targetContext.getImageData(0,0,n.width,n.height).data;i.ball=new s(.01,0,350);for(var e,a=0,o=n.height;o>a;a+=3)for(var c=0,u=n.width;u>c;c+=3)e=4*(a*u+c),t[++e]>0&&n.particleArr.push(new r(c,a))}},{"./canvas":2,"./orbit":4,"./particle":5}],4:[function(t,e,i){"use strict";function n(t,e,i,n,r){this.x=n,this.y=r,this.speed=t,this.angle=e,this.radius=i}n.prototype.update=function(t,e){this.x=t+Math.cos(this.angle)*this.radius,this.y=e+Math.sin(this.angle)*this.radius},n.prototype.adjustAngle=function(){this.angle+=this.speed},e.exports=n},{}],5:[function(t,e,i){"use strict";function n(t,e){this.x=this.originX=t,this.y=this.originY=e,this.rx=0,this.ry=0,this.vx=0,this.vy=0,this.force=0,this.angle=0,this.distance=0}n.prototype.update=function(t,e,i,n,r){this.rx=t-this.x,this.ry=e-this.y,this.distance=this.rx*this.rx+this.ry*this.ry,this.force=-i/this.distance,this.distance<i&&(this.angle=Math.atan2(this.ry,this.rx),this.vx+=this.force*Math.cos(this.angle),this.vy+=this.force*Math.sin(this.angle)),this.x+=(this.vx*=n)+(this.originX-this.x)*r,this.y+=(this.vy*=n)+(this.originY-this.y)*r},e.exports=n},{}],6:[function(t,e,i){"use strict";var n=(t("./utils"),t("./canvas")),r=t("./init");i.update=function(){for(var t=0,e=n.particleArr.length;e>t;t++){var i=n.particleArr[t];i.update(n.mouse.x,n.mouse.y,n.mouseRadius,n.friction,n.ease)}r.ball.update(n.centerX,n.centerY)},i.render=function(){n.context.clearRect(0,0,n.width,n.height);for(var t=0,e=n.particleArr.length;e>t;t++){var i=n.particleArr[t];n.context.fillStyle="#505050",n.context.fillRect(i.x,i.y,2,2)}n.context.beginPath(),n.context.arc(r.ball.x,r.ball.y,3,0,2*Math.PI,!1),n.context.fillStyle="#505050",n.context.fill(),r.ball.adjustAngle()}},{"./canvas":2,"./init":3,"./utils":7}],7:[function(t,e,i){"use strict";i.utils={randomInt:function(t,e){return Math.floor(t+Math.random()*(e-t+1))}}},{}]},{},[1]);
//# sourceMappingURL=ryan.js.map