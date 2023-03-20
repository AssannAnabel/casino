import { BlackJack } from "./BlackJack";
import { Maquinas } from "./Maquinas";

export class JuegoDeCasino{
protected nombre:string;
private sala:number;
private valorDeJugada:number;

public constructor(nombre:string,sala:number,valorDeJugada:number){
    this.nombre=nombre;
    this.sala=sala;
    this.valorDeJugada=valorDeJugada;
    }

public getInfo():JuegoDeCasino{
    console.log(this);
    return this;

   }
}