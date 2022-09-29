function dibujarCanvas(){
    tablero.LineWidth = 8;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle= "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveId(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}