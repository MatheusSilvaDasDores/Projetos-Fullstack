const canvas = document.getElementById("Canvas1");
const ctx = canvas.getContext("2d");

function quadrado(num1, num2, num3, num4) {
    ctx.lineWidth = 2;
    ctx.fillRect(num1, num2, num3, num4);

}

function linha(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 1;
    ctx.stroke();
}

function arco(x, y, raio, inicio, fim) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio * Math.PI, fim * Math.PI);
    ctx.stroke();
}

function escrever(texto, x, y) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(texto, x, y);
    ctx.closePath();
}

ctx.beginPath();
ctx.fillStyle = 'white';
quadrado(0, 0, 400, 400)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
quadrado(0, 0, 55, 50)
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = 'red';
quadrado(245, 0, 55, 50)
ctx.closePath();

ctx.beginPath();
linha(50, 50, 50, 50);
ctx.closePath();
escrever("Canvas", 115, 50);

ctx.beginPath();
ctx.strokeStyle = 'blue';
linha(55, 50, 150, 150)
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'red';
linha(245, 50, 150, 150)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';
quadrado(100, 150, 50, 50)
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'cyan';
arco(150, 110, 15, 33, 40);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.fillStyle = 'yellow';
arco(225, 225, 15, 33, 40);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.fillStyle = 'yellow';
arco(60, 225, 15, 33, 40);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
arco(150, 150, 60, 1, 0);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
arco(150, 150, 80, 1, 1.26);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
arco(150, 150, 80, 1.74, 0);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cyan';
quadrado(0, 122, 30, 60)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cyan';
quadrado(269, 135, 50, 30)
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green';
linha(0, 150, 300, 150)
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'grey';
linha(150, 150, 150, 300)
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.fillStyle = 'cyan';
arco(150, 300, 40, 1, 0);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
arco(150, 300, 55, 1.5, 0);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
arco(150, 300, 73, 1, 1.5);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
quadrado(0, 270, 50, 30)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
quadrado(0, 240, 27, 60)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
quadrado(250, 270, 50, 30)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
quadrado(275, 240, 27, 60)
ctx.closePath();