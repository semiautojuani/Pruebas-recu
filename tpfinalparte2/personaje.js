class Personaje{
 constructor(posX, posY, img){
 this.posX = posX;
 this.posY = posY;
 this.img = img;
 this.vida = 1;
 this.bala = new Bala();
 this.juegoTerminado = false;
 }

 dibujar(){
  image(this.img, this.posX - 10, this.posY - 50, 50, 70);
 }

//-------MOVIMIENTO-------//

 movimiento(keyCode){
  if (keyCode == LEFT_ARROW) {
   this.moverIzq();
  }else if (keyCode == RIGHT_ARROW) {
   this.moverDer();
  }else if (keyCode == UP_ARROW) {
    this.moverArriba();
  }else if (keyCode == DOWN_ARROW) {
    this.moverAbajo();
   }
 }
 
 moverDer(){
  this.posX += 15;
 }

 moverIzq(){
  this.posX -= 15; 
 }

 moverArriba(){
  this.posY -= 80; 
 }

 moverAbajo(){
  this.posY += 80;
 }
//------------------------//


 colisionConBala(balas){
  for (let i = 0; i < balas.length; i++) {
   if (dist(this.posX, this.posY, balas[i].posX, balas[i].posY) < 25) {
    this.juegoTerminado = true;
    juego.reiniciarJuego();
   }
  }
 }
}
