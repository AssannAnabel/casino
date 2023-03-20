import { Casino } from "./Casino";
import { JuegoDeCasino } from "./JuegoDeCasino";
import { BlackJack } from "./BlackJack";
import { Maquinas } from "./Maquinas";

const blackJ=new BlackJack("blackajack pro",7,1200,10);
const maquinaMonedas=new Maquinas("los pitufos pagan",2,1000,true);
const casino=new Casino("casino juarez","libertad 354",10);

casino.setcasinoJugar(blackJ);
casino.setcasinoJugar(maquinaMonedas);
casino.getInfo()