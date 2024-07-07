var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//        (x, y, width, height);
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(255, 222, 0, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(255, 0, 222, 0.5)';
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "green";
// c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 32; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.random() * 256;
//     var g = Math.random() * 256;
//     var b = Math.random() * 256;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//     c.stroke();   
// }
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 30;
// var minRadius = 2;

var colorArray = [
    'red',
    'blue',
    'green',
    'yellow',
];

// This is for movement right now.
// Maybe I'll add exploding when left clicked?.
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

var circleArray = [];

for(var i = 0; i < 300; i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5 );
    var dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
    }



function Circle(x, y, dx, dy, radius) {{}
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = `rgb(${r}, ${g}, ${b})`;
        c.fill();
    } 

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.y - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 
            && mouse.x - this.x > -50
              && mouse.y - this.y < 50
                && mouse.y - this.y > -50){
                    if (this.radius < maxRadius) {
                        this.radius += 1;
                    }
        } else if(this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0 ; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();

// This is something cool.
// This might be our first step to adding to our calculator effect.
// just need some kind of magnet to attract and form a number.
// This is just JavaScript HTML canvas, imagine if we use CSS
// We can add glows and stuff, maybe make the circle have range of sizes
// or ranges of glow to them.