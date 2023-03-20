import { JuegoDeCasino } from "./JuegoDeCasino";

export class Casino{
    private nombre:string;
    private direccion:string;
    private salas:number;
    private edadMinima:number=18;
    protected juegoDeCasino:JuegoDeCasino[];

    public constructor(nombre:string,direccion:string,salas:number){
        this.nombre=nombre;
        this.direccion=direccion;
        this.salas=salas;
        this.juegoDeCasino=[];
    };
    getInfo():Casino{
        console.log(this);
        return this;

    };
    public setcasinoJugar(juegos:JuegoDeCasino){
        this.juegoDeCasino.push(juegos);

    }
}