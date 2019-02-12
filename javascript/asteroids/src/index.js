const MovingObject = require("../src/moving_object.js")
Window.movingObject = MovingObject;
console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 500;
    canvasEl.height = 500;
  
    const ctx = canvasEl.getContext("2d");

    const mo = new MovingObject(
      { pos: [0, 0], vel: [100, 100], radius: 5, color: "#00FF00"}
    )

    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);

    // ctx.fillStyle = "purple";
    // ctx.fillRect(0, 0, 500, 500);
  
    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();
  });