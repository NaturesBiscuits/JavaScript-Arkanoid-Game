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

for (var i = 0; i < 32; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    c.stroke();
}