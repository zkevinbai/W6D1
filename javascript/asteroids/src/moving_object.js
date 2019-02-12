
function MovingObject(object) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
}

MovingObject.prototype.draw = function (ctx){
    // ctx.beginPath();
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.fillStyle = "#FF0000";
    // ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
}

MovingObject.prototype.move = function (){
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
}


module.exports = MovingObject;