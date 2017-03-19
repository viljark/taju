<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>

  export default {
    data () {
      return {
          animation: null
      }
    },
    props: ["cross"],

    mounted() {
      // setup canvas
      var canvas = document.querySelector('canvas');
      var ctx = canvas.getContext('2d');

      var height = canvas.height = window.innerHeight;
      var width = canvas.width = height * 1.2;
      var unit = Math.floor(height / 100);
      console.log("unit is", unit);
      // function to generate random number

      function random(min, max) {
        var num = Math.floor(Math.random() * (max - min)) + min;
//        if (num === 0) {
//          num = 2;
//        }
        return num;
      }

      // define Ball constructor

      function Thing(size) {
        this.x = width;
        this.y = height / 2;
        this.velX = -unit;
        this.velY = 0;
        this.color = "rgb(255, 0, 0)";
        this.size = size;
      }

      Thing.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.size / 3, this.size);
        ctx.rect(this.x - this.size / 3, this.y + this.size / 3, this.size, this.size / 3);
        ctx.fill();
      };
      // define ball draw method

      Thing.prototype.update = function () {
        this.x += this.velX;
      };

      function Ball(size) {
        this.collisions = 0;
        this.speedSwitchTime = Math.floor(((Math.random() * 300) + 100) * 10)
        this.newSpeedStartTime = new Date().getTime();
        this.size = size;
        this.x = random(this.size * 2, width - this.size * 2);
        this.y = random(this.size * 2, height - this.size * 2);
        this.velX = random(-unit, unit);
        this.velY = random(-unit, unit);

        //we don't want still objects
        if (this.velX == 0) {
          this.velX = random(1, unit)
        }
        if (this.velY == 0) {
          this.velY = random(-unit, -1)
        }
        this.color = '#1ce';
      }

      Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = '18px serif';
        ctx.fillText(this.collisions, this.x + this.size, this.y);

      };

      // define ball update method

      Ball.prototype.update = function () {
        var currentCollisions = this.collisions;

        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
          this.collisions++;
        }

        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
          this.collisions++;
        }

        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
          this.collisions++;
        }

        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
          this.collisions++;
        }

        //do not change speed & direction when collision happening, causes objects to "stick" to edges
        if (currentCollisions === this.collisions) {
          this.time = new Date().getTime();
          this.newSpeedTime = this.time - this.newSpeedStartTime
          if (this.newSpeedTime >= this.speedSwitchTime) {
            this.newSpeedStartTime = new Date().getTime();

            // change the movement direction, but keep the general direction same
            this.velY = random(unit / 3, unit) * Math.sign(this.velY);
            this.velX = random(unit / 3, unit) * Math.sign(this.velX);
//          if (Math.random()*10 > 5) {
//            this.dX *= -1
//          }
//          if (Math.random()*10 > 5) {
//            this.dY *= -1
//          }
          }
        }
        this.x += this.velX;
        this.y += this.velY;
      };

      // define array to store balls

      var balls = [];

      // define loop that keeps drawing the scene constantly
      var thing = new Thing(unit * 2);
      var trialStartTime;

      var cross = this.cross;

      function setup() {
        ctx.fillStyle = 'rgba(55,55,55,1)';
        ctx.fillRect(0, 0, width, height);
        while (balls.length < 11) {
          var ball;
          if (balls.length === 0) {
            ball = new Ball(2 * unit);
          } else {
            ball = new Ball(unit)
          }
          balls.push(ball);
        }
        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
        }
      }

      let _this = this;
      function loop() {
        ctx.fillStyle = 'rgba(55,55,55,1)';
        ctx.fillRect(0, 0, width, height);
        var trialCurrentTime = new Date().getTime();

        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
        }

        if ((cross) && (trialCurrentTime - trialStartTime >= 1000)) {
          thing.draw();
          thing.update();
        }

        _this.animation = requestAnimationFrame(loop);
      }

      setup();
      setTimeout(function () {
        trialStartTime = new Date().getTime();
        loop();
      }, 2000)


      document.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
          toggleFullScreen();
        }
      }, false);

      function toggleFullScreen() {
        if (!document.fullscreenElement && !document.mozFullscreenElement && !document.webkitFullscreenElement) {
          if (canvas.requestFullScreen)
            canvas.requestFullScreen();
          else if (canvas.webkitRequestFullScreen)
            canvas.webkitRequestFullScreen();
          else if (canvas.mozRequestFullScreen)
            canvas.mozRequestFullScreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      }
    },
    methods: {

    },
    destroyed() {
        console.log("destroyed");
        if (this.animation) {
          window.cancelAnimationFrame(this.animation);
        }
    }
  }
</script>

<style>
  body {
    overflow: hidden;
  }
</style>
