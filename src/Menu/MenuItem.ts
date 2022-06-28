import { Drink } from "./Drink";
import { Food } from "./Food";

export class MenuItem{
    private food:Food=undefined;
    private drink:Drink=undefined;
    constructor(private id:number){}

    getFood():Food{
        return this.food;
    }

    getDrink():Drink{
        return this.drink;
    }

    setFood(food:Food){
        this.food = food;
    }

    
}