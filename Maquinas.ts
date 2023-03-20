import { JuegoDeCasino } from "./JuegoDeCasino";

export class Maquinas extends JuegoDeCasino{
    protected nombre:string;
    private ganador:boolean;
    private premio?:number;

public constructor(nombre:string,sala:number,valorDeJudada:number,ganador:boolean,premio?:number){
    super(nombre,sala,valorDeJudada);
    this.nombre=nombre;
    this.premio=premio;
    this.ganador=ganador;
};
 public getInfo():Maquinas{
    console.log(this);
    return this;

 }
}