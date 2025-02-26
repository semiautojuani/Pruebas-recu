class Recompensa {
 constructor(posX, posY, img) {
  this.posX = posX;
  this.posY = posY;
  this.img = img;
  this.agarroRecompensa = false;
 }

 dibujar() {
  image(this.img, this.posX - 30, this.posY - 50, 50, 70);
 }

 colisionConRecompensa(personaje) {
  let centroRecompensaX = this.posX + 15;
  let centroRecompensaY = this.posY + 15;
  let centroPersonajeX = personaje.posX + 25;
  let centroPersonajeY = personaje.posY + 35;

  let distancia = dist(centroRecompensaX, centroRecompensaY, centroPersonajeX, centroPersonajeY);

  if (distancia < 35) {
   this.agarroRecompensa = true;
   juego.estadoActual = "victoria";  // Cambiar a la pantalla de victoria
  }
 }
}

class Plataforma {
 constructor(X, Y, An, Al){
  this.X = X;
  this.Y = Y;
  this.An = An;
  this.Al = Al;
 }

 dibujar() {
  fill(255, 0, 0);
  rect(this.X, this.Y, this.An, this.Al)
 }
}
