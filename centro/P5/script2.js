const c2 = document.getElementById("Canvas2");
const ctx2 = c2.getContext("2d");

function quadrado2(num1, num2, num3, num4) {
    ctx2.lineWidth = 2;
    ctx2.fillRect(num1, num2, num3, num4);
}

function linha(x1, y1, x2, y2) {
    ctx2.beginPath();
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.lineWidth = 1;
    ctx2.stroke();
}

function arco(x, y, raio, inicio, fim) {
    ctx2.beginPath();
    ctx2.arc(x, y, raio, inicio * Math.PI, fim * Math.PI);
}

function escrever(texto, x, y) {
    ctx2.beginPath();
    ctx2.fillStyle = "black";
    ctx2.font = "20px Arial";
    ctx2.fillText(texto, x, y);
}

function triangulo(x1, y1, x2, y2, x3, y3, x4, y4) {
    ctx2.beginPath();
    ctx2.moveTo(x1, y1);   
    ctx2.lineTo(x2, y2);   
    ctx2.lineTo(x3, y3); 
    ctx2.lineTo(x4, y4);   
    ctx2.fill();
    ctx2.closePath();      
    
}


ctx2.fillStyle = '#8ffdd4';
quadrado2(0, 0, 300, 300);

ctx2.fillStyle = 'grey';
quadrado2(0, 215, 300, 100);

ctx2.fillStyle = '#895129';
quadrado2(105, 115, 90, 100);

ctx2.fillStyle = '#f5694d';
triangulo(105, 115, 150, 70, 195, 115)

ctx2.fillStyle = '#64b4ffff';
quadrado2(160, 140, 30, 30);

ctx2.fillStyle = '#64b4ffff';
quadrado2(113, 140, 30, 30);

ctx2.fillStyle = '#4e2e14ff';
quadrado2(143, 170, 17, 45);

ctx2.beginPath();
ctx2.fillStyle = 'yellow';
arco(235, 60, 40, 0, 2);
ctx2.fill();
ctx2.closePath();

ctx2.fillStyle = '#a34900ff';
quadrado2(40, 170, 17, 45);

ctx2.beginPath();
ctx2.fillStyle = 'green';
arco(48, 150, 25    , 0, 2);
ctx2.fill();
ctx2.closePath();

ctx2.fillStyle = '#a34900ff';
quadrado2(265, 220, 17, 45);

ctx2.beginPath();
ctx2.fillStyle = 'green';
arco(273, 200, 25    , 0, 2);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#1980e0ff';
arco(0, 200, 40, 0, 2);
ctx2.fill();
ctx2.closePath();

ctx2.fillStyle = '#1980e0ff';
quadrado2(0, 200, 40, 200);

ctx2.fillStyle = '#1980e0ff';
quadrado2(0, 260, 110, 150);

ctx2.beginPath();
ctx2.fillStyle = '#1980e0ff';
arco(110, 300, 40, 0, 2);
ctx2.fill();
ctx2.closePath();










