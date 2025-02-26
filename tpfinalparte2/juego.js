class Principal{
 constructor(){
  this.botones = [];
  this.estados = ["inicio", "instrucciones", "juego", "victoria", "derrota", "créditos"];
  this.plataformas = [];
  this.enemigos = [];
  this.tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
  
  this.estadoActual = "inicio";
  
  
  this.crearPantalla();
  this.crearBotones();
  this.crearPersonaje();
  this.crearEnemigos();
  this.crearPlataformas();
  this.crearRecompensa();
  
  this.dibujarInicio();
  this.dibujarInstrucciones();
  this.dibujarJuego();
  this.dibujarVictoria();
  this.dibujarDerrota();
  this.dibujarCreditos();
  this.reiniciarJuego();
  
  this.teclaPresionada();

 }
 
//-------CREADORES-------//
 crearPantalla(){
  this.pantalla = new Pantalla();
 }
 
 crearBotones(){
  this.botones[0] = new Boton("Instrucciones", 250, 300, 150, 50, "instrucciones", this);
  this.botones[1] = new Boton("Jugar", 75, 300, 150, 50, "juego", this);
  this.botones[2] = new Boton("Créditos",  425, 300, 150, 50, "créditos", this);
  this.botones[3] = new Boton("Volver a jugar", 70, 150, 150, 50, "juego", this);
  this.botones[4] = new Boton("Inicio", 420,150 , 150, 50, "inicio", this);
 }

 crearPersonaje(){
  this.personaje = new Personaje(width / 2, 465, pj, this);
  this.personaje.juegoTerminado = false;
 }

 crearEnemigos(){
  for (let i = 0; i < 6; i++) {
   this.enemigos.push(new Enemigo(600, i * 80 + 50, this.tiempos[i], villano));
  }
 }
 
 crearPlataformas() {
  this.plataformas = [ new Plataforma(275, 80, 200, 10),  //  Plataforma 7
                       new Plataforma(420, 160, 155, 10), //  Plataforma 6
                       new Plataforma(100, 160, 225, 10), //  Plataforma 5
                       new Plataforma(250, 240, 200, 10), //  Plataforma 4
                       new Plataforma(125, 320, 150, 10), //  Plataforma 3
                       new Plataforma(380, 320, 150, 10), //  Plataforma 2
                       new Plataforma(225, 400, 200, 10)  //  Plataforma 1
                     ];
 }
  

 crearRecompensa(){
  this.recompensa = new Recompensa(348, 60, aliado);
 }
//-----------------------//
 
 
 inicio(){
  if (this.estadoActual === "inicio"){
   this.dibujarInicio();
  } else if (this.estadoActual === "instrucciones"){
   this.dibujarInstrucciones();
  } else if (this.estadoActual === "juego"){
   this.dibujarJuego();
  } else if (this.estadoActual === "victoria"){
   this.dibujarVictoria();
  } else if (this.estadoActual === "derrota"){
   this.dibujarDerrota();
  } else if (this.estadoActual === "créditos"){
   this.dibujarCreditos();
  }
 }
  
 dibujarJuego(){
  this.pantalla.mostrarPantalla(2); 

  for (let plataforma of this.plataformas) {
   plataforma.dibujar();
  }

  for (let enemigo of this.enemigos) {
   enemigo.dibujar();
  }

  this.personaje.dibujar();
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
 
 dibujarInstrucciones(){
  this.pantalla.mostrarPantalla(1);
  this.botones[1].dibujar();    
 }
 
 dibujarVictoria(){
  this.pantalla.mostrarPantalla(3);
  this.botones[3].dibujar(); 
  this.botones[4].dibujar();
 }
 
 dibujarDerrota(){
  //cancion.stop();
  this.pantalla.mostrarPantalla(4);
  this.botones[3].dibujar(); 
  this.botones[4].dibujar();
 }
 
 dibujarCreditos(){
  this.pantalla.mostrarPantalla(5); 
  this.botones[4].dibujar();
 }
 
 mousePresionado(mousePressed) {
  for (let boton of this.botones) {
   if (boton.posicionMouse()) {
    boton.click();
    
   if (boton === this.botones[3]){
    this.reiniciarJuego();
    }

   /*if (boton === this.botones[1] || boton === this.botones[3]) {
     if (!cancion.isPlaying()) {
      cancion.play();
     }
    }*/
   }
  }
 }
 

 teclaPresionada(keyCode){
  this.personaje.movimiento(keyCode);
 }

 ajustarVelocidadBalas(){
  for (let enemigo of this.enemigos) {
   for (let bala of enemigo.balas) {
    bala.setVelocidadRapida(true);
   }
  }
 }
 
 reiniciarJuego() {   
  /*if(this.personaje.juegoTerminado == true && this.botones[3].click()){
   this.crearPantalla();
   this.crearBotones();
   this.crearPersonaje();
   this.crearEnemigos();
   this.crearPlataformas();
   this.crearRecompensa();
   this.estadoActual = "juego";
  }*/
  this.personaje.reiniciar();
  this.crearEnemigos();
  this.crearRecompensa();
 }
}
