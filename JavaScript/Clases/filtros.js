class FiltroGanados {
  constructor(equipo) {
    this.equipo = equipo;
  }
  find(partido) {
    if (partido.getResultado(this.equipo) == 0) return true;
  }
}

class FiltroPerdidos {
  constructor(equipo) {
    this.equipo = equipo;
  }
  find(partido) {
    if (partido.getResultado(this.equipo) == 2) return true;
  }
}

class FiltroEmpatados {
  constructor(equipo) {
    this.equipo = equipo;
  }
  find(partido) {
    if (partido.getResultado(this.equipo) == 1) return true;
  }
}
