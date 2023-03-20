import { JuegoDeCasino } from "./JuegoDeCasino";

export class BlackJack extends JuegoDeCasino{
    protected nombre:string;
    private cartas:number;
    private premio?:number;
    public constructor(nombre:string,sala:number,valorDeJugada:number,cartas:number,premio?:number){
        super(nombre,sala,valorDeJugada);
        this.nombre=nombre;
        this.cartas=cartas;
        this.premio=premio;
    
    };
    
    public getInfo():BlackJack{
        console.log(this)
        return this;
        
    }
}