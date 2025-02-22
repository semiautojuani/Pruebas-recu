class Enemigo{
 constructor(posX, posY, tiempoDisparo, img) {
  this.posX = posX;
  this.posY = posY;
  this.img = img;
  this.balas = [];
  this.tiempoDisparo = tiempoDisparo;
  this.ultimoDisparo = millis();
 }

 dibujar() {
  for (let bala of this.balas) {
   bala.dibujar();
  }
  
  if(this.img){
   image(this.img, this.posX - 30, this.posY - 40, 90, 70);
  }else{
   console.error("La imagen del enemigo no está definida.");
  }
  
  this.verificarDisparo();
  
 }

 dispararBala() {
  let nuevaBala = new Bala(this.posX, this.posY, proyectil);
  nuevaBala.disparar();
  this.balas.push(nuevaBala);
 }

 verificarDisparo(){
  if (millis() - this.ultimoDisparo >= this.tiempoDisparo) {
   this.dispararBala();
   this.ultimoDisparo = millis();
  }
 }

}
