class Pantalla {
 constructor() {
  this.posX = 0;
  this.posY = 0;
  this.ancho = width;
  this.alto = height;
  this.fondoArreglo = fondoArreglo;
  
 }


 mostrarPantalla(index) {
  if (this.fondoArreglo[index]) {
   image(this.fondoArreglo[index], this.posX, this.posY, this.ancho, this.alto);
   }else {
    console.error('El fondo [index] no está definida.');
   }
  }
}
