<template>
  <div>
    <canvas  ref="canvas"></canvas>
  </div>
</template>

<script>

  export default {
    data () {
      return {
          animation: null
      }
    },
    props: ["cross", "modifiers", "crossSize"],

    mounted() {
      var _this = this;

      var animationDuration = 1; //in seconds
      // setup canvas
      var canvas = document.querySelector('canvas');
      var ctx = canvas.getContext('2d');

      var height = canvas.height = window.innerHeight;
      var width = canvas.width = height * 1.2;
      var unit = Math.floor(height / 100);

      var speedUnit = unit / 2;
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
        ctx.rect(
          this.x - this.size / 3,
          this.y + this.size / 3,
          this.size,
          this.size / 3
        );
        ctx.fill();
      };
      // define ball draw method

      Thing.prototype.update = function () {
        this.x += this.velX;
      };

      function Ball(size) {
        this.collisions = 0;
        this.speedSwitchTime = Math.floor(((Math.random() * 300) + 100) * 10);
        this.newSpeedStartTime = new Date().getTime();
        this.size = size;
        this.x = random(this.size * 2, width - this.size * 2);
        this.y = random(this.size * 2, height - this.size * 2);
        this.velX = random(-speedUnit, speedUnit);
        this.velY = random(-speedUnit, speedUnit);

        //we don't want still objects
        if (this.velX == 0) {
          this.velX = random(1, speedUnit)
        }
        if (this.velY == 0) {
          this.velY = random(-speedUnit, -1)
        }
        this.color = '#1ce';
      }

      Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = '18px serif';
        ctx.fillText(this.collisions, this.x + this.size, this.y);

      };

      // define ball update method

      Ball.prototype.update = function () {
        var currentCollisions = this.collisions;

        if ((this.x + this.size / 2) >= width) {
          this.velX = -(this.velX);
          this.collisions++;
        }

        if ((this.x - this.size / 2) <= 0) {
          this.velX = -(this.velX);
          this.collisions++;
        }

        if ((this.y + this.size / 2) >= height) {
          this.velY = -(this.velY);
          this.collisions++;
        }

        if ((this.y - this.size / 2) <= 0) {
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

            this.velY = random(speedUnit / 2, speedUnit) * Math.sign(this.velY);
            this.velX = random(speedUnit / 2, speedUnit)  * Math.sign(this.velX);
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

      var balls1 = [];
      var balls2 = [];
      var balls3 = [];

      // define loop that keeps drawing the scene constantly
      var thing = new Thing(unit * this.crossSize);
      var trialStartTime;

      var cross = this.cross;

      function setup(modifiers) {
        ctx.fillStyle = 'rgba(55,55,55,1)';
        ctx.fillRect(0, 0, width, height);
        while (balls1.length < 3) {
          balls1.push(new Ball(unit * modifiers[0]));
        }
        while (balls2.length < 3) {
          balls2.push(new Ball(unit * modifiers[1]));
        }
        while (balls3.length < 3) {
          balls3.push(new Ball(unit * modifiers[2]));
        }
        drawAllBalls(false);
      }

      function showPrompt() {
          var response = prompt("Mitu põrget lugesid?");
          if (!response || response.trim().length === 0) {
              showPrompt();
              return;
          }

          var collisions = 0;
          balls1.forEach(function (ball) {
            collisions += ball.collisions;
          });

          _this.$emit("data", {
            collisionsReal: collisions,
            collisionsCounted: response
          });

      };

      function drawAllBalls(update) {
        for (let i = 0; i < balls1.length; i++) {
          balls1[i].draw();
          if (update) {
            balls1[i].update();
          }
        }
        for (let i = 0; i < balls2.length; i++) {
          balls2[i].draw();
          if (update) {
            balls2[i].update();
          }
        }
        for (let i = 0; i < balls3.length; i++) {
          balls3[i].draw();
          if (update) {
            balls3[i].update();
          }
        }
      }

      function loop() {
        var now = new Date().getTime();
        ctx.fillStyle = 'rgba(55,55,55,1)';
        ctx.fillRect(0, 0, width, height);
        var trialCurrentTime = new Date().getTime();

        drawAllBalls(true);

        if ((cross) && (trialCurrentTime - trialStartTime >= 1000)) {
          thing.draw();
          thing.update();
        }
        if (now - trialStartTime > 1000 * animationDuration) {
          ctx.fillStyle = 'rgba(55,55,55,1)';
          ctx.fillRect(0, 0, width, height);
          window.cancelAnimationFrame(_this.animation);
          setTimeout(showPrompt, 100);
        } else {
          _this.animation = requestAnimationFrame(loop);
        }
      }

      setup(this.modifiers);
      setTimeout(function () {
        trialStartTime = new Date().getTime();
        loop();
      }, 2000)
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
