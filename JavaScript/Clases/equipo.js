class Equipo {
  constructor(nombre) {
    this.nombre = nombre;
    this.partidos = [];
  }
  getPuntos() {
    return (
      this.busqueda(new FiltroGanados(this).find(partido) * 3) +
      this.busqueda(new FiltroEmpatados(this).find(partido))
    );
  }
  getPartidosJugados() {
    return this.partidos.length;
  }
  busqueda(filtro) {
    let partidos = [];
    this.partidos.forEach((partido) => {
      if (filtro.find(partido)) partidos.push(partido);
    });
    return partidos;
  }
  getNombre() {
    return this.nombre;
  }
  getEstadio() {
    return this.estadio;
  }
  addPartido(partido) {
    this.partidos.push(partido);
  }
  toString() {
    return `${this.getNombre()}|${this.getPuntos()}|${this.getPartidosJugados()}`;
  }
}
