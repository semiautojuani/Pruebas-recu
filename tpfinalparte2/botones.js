class Boton {
 constructor(texto, X, Y, An, Al, sigPantalla){
  this.texto = texto;
  this.X = X;
  this.Y = Y;
  this.An = An;
  this.Al = Al;
  this.sigPantalla = sigPantalla;
  this.posicionMouse();
  this.click();
 }
  
 dibujar(){
  if (this.posicionMouse()) {
   fill(210, 180, 140);
  } else {
   fill(77, 51, 25);
  }
  rect(this.X, this.Y, this.An, this.Al);
  
  
  push();
  
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(this.texto, this.X + this.An / 2, this.Y + this.Al / 2);
  
  pop();
 }
 
 posicionMouse() {
  return mouseX > this.X && mouseX < this.X + this.An && mouseY > this.Y && mouseY < this.Y + this.Al;
 }
 
 click(){
  if (this.posicionMouse()) {
    juego.estadoActual = this.sigPantalla;
    }
 }
}
 
