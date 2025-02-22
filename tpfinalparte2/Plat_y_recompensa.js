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
    if (dist(this.posX, this.posY, personaje.posX, personaje.posY) < 25) {
      this.agarroRecompensa = true;
      juego.estadoActual = "victoria";
    }
  }
}


class Plataforma {

  dibujar() {
    fill(255,0,0);
    rect(275, 80, 200, 10); // Plataforma 7
    fill(255,0,0);
    rect(420, 160, 155, 10); // Plataforma 6
    fill(255,0,0);
    rect(100, 160, 225, 10); // Plataforma 5
    fill(255,0,0);
    rect(250, 240, 200, 10); // Plataforma 4
    fill(255,0,0);
    rect(125, 320, 150, 10); // Plataforma 3
    fill(255,0,0);
    rect(380, 320, 150, 10); // Plataforma 2
    fill(255,0,0);
    rect(225, 400, 200, 10); // Plataforma 1
  }
}
