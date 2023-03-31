class Equipo{
    constructor(nombre){
        this.nombre = nombre;
        this.partidos = [];
    }
    getPuntos(){
        let puntos = 0;
        this.partidos.forEach(partido =>{
            let puntos = 0;
            
        })
    }
    
    getPartidosJugados(){return this.partidos.length;}
    getNombre(){return this.nombre;}
    getEstadio(){return this.estadio;}
    addPartido(partido){this.partidos.push(partido);}
    toString(){return `${this.getNombre()}|${this.getPuntos()}|${this.getPartidosJugados()}`}
}
