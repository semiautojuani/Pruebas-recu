class Principal{
 constructor(){
  this.botones = [];
  this.estadoActual = ["inicio", "instrucciones", "juego", "victoria", "derrota", "créditos"];
  this.plataformas = [];
  
  this.crearPantalla();
  this.crearBotones();
  this.crearPersonaje();
  this.crearEnemigos();
  this.crearPlataforma();
  this.crearRecompensa();
  
  this.dibujarInicio();
  //this.dibujarInstrucciones();
  //this.dibujarJuego();
  //this.dibujarVictoria();
  //this.dibujarDerrota();
  //this.dibujarCreditos();
  
  this.estadoActual = "inicio";
  
  this.reiniciarJuego();

 }
 
//-------CREADORES-------//
 crearPantalla(){
  this.pantalla = new Pantalla();
 }
 
 crearBotones(){
  this.botones[0] = new Boton("Instrucciones", width/2 - 75, height/2, 150, 50, "instrucciones");
  this.botones[1] = new Boton("Jugar", width/2 - 75, 400, 150, 50, "juego");
  this.botones[2] = new Boton("Créditos", width/2 - 75, 100, 150, 50, "créditos");
  this.botones[3] = new Boton("Reiniciar", width/2 - 75, 400, 150, 50, "inicio");
  //this.botones[4] = new Boton("Inicio", width/2 - 75, 100, 150, 50, "inicio");
 }

 crearPersonaje(){
  this.personaje = new Personaje(width / 2, 465, pj);
 }

 crearEnemigos(){
  this.enemigos = [];
  let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
  for (let i = 0; i < 6; i++) {
   this.enemigos.push(new Enemigo(600, i * 80 + 50, tiempos[i], villano));
  }
 }
  
 crearPlataforma(){
  this.plataforma = new Plataforma();
 }

 crearRecompensa(){
  this.recompensa = new Recompensa(348, 60, aliado);
 }
//-----------------------//
 
 
 inicio(){
  if (this.estadoActual === "inicio"){
   dibujarInicio();
  } else if (this.estadoActual === "instrucciones"){
     this.pantalla.mostrarPantalla(1);
     this.botones[1].dibujar();
  } else if (this.estadoActual === "juego"){
     this.pantalla.mostrarPantalla(2);
     this.dibujar();
  } else if (this.estadoActual === "victoria"){
     this.pantalla.mostrarPantalla(3);
     this.botones[3].dibujar();
  } else if (this.estadoActual === "derrota"){
     this.pantalla.mostrarPantalla(4);
     this.botones[3].dibujar();
     //this.botones[4].dibujar();
  } else if (this.estadoActual === "créditos"){
     this.pantalla.mostrarPantalla(5);
     //this.botones[4].dibujar();
  }
  
  //---------INICIAR JUEGO---------//
  if(this.botones[0].posicionMouse()){
   this.botones[0].click();
  } else if (this.botones[1].posicionMouse()){
   this.botones[1].click();
  } else if (this.botones[2].posicionMouse()){
   this.botones[2].click();
  } else if(this.botones[3].posicionMouse()){
   this.botones[3].click(); 
   this.estadoActual = "juego";
  } /*else if (this.botones[4].posicionMouse()){
   this.botones[4].click();
   this.estadoActual = "inicio";
  }*/
 }
  
 dibujar(){
  for (let enemigo of this.enemigos) {
   enemigo.dibujar();
  }

  this.personaje.dibujar();
  this.plataforma.dibujar();
  this.recompensa.dibujar();

  this.recompensa.colisionConRecompensa(this.personaje);

  for (let enemigo of this.enemigos) {
    this.personaje.colisionConBala(enemigo.balas);
  }
 }
 
 dibujarInicio(){
    this.pantalla.mostrarPantalla(0);
    this.botones[0].dibujar();
    this.botones[1].dibujar();
    this.botones[2].dibujar();
 }
 
 

 teclaPresionada(keyCode){
  this.personaje.movimiento(keyCode);
 }

 ajustarVelocidadBalas() {
  for (let enemigo of this.enemigos) {
   for (let bala of enemigo.balas) {
    bala.setVelocidadRapida(true);
   }
  }
 }
 
 reiniciarJuego(){
  if(this.personaje.juegoTerminado == true){
   this.crearPantalla();
   this.crearBotones();
   this.crearPersonaje();
   this.crearEnemigos();
   this.crearPlataforma();
   this.crearRecompensa();
   this.estadoActual = "derrota";
  }
 }
}
