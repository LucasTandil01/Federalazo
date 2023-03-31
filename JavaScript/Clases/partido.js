class Partido{
    constructor(equipo1,equipo2,golE1,golE2){
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.golE1 = golE1;
        this.golE2 = golE2;
    }
    getResultado(equipo){
        if((this.golE1 > this.golE2) && (this.equipo1 === equipo)) return 0; // Si equipo1 gana y es el equipo que entra
        if((this.golE1 > this.golE2) && (this.equipo1 !== equipo)) return 2;// Si equipo1 gana y no es el equipo que entra
        if((this.golE1 == this.golE2)) return 1; // Si empatan
        if((this.golE2 > this.golE1) && (this.equipo2 === equipo)) return 0; // Si equipo2 gana y es el equipo que entra
        if((this.golE2 > this.golE1) && (this.equipo2 !== equipo)) return 0; // Si equipo2 gana y no es el equipo que entra
    }
    toString(){return `${this.equipo1.getNombre()} ${this.golE1} - ${this.equipo2.getNombre()} ${this.golE2}`}
}

const river = new Equipo('River Plate','El Monumental');
const santa = new Equipo('Santamarina','San Martin');

const partido1 = new Partido(river,santa,1,5);

console.log(partido1.toString());