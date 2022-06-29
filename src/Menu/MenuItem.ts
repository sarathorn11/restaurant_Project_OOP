import { Drink } from "./Drink";
import { Food } from "./Food";

export class MenuItem{
    private food:Food[]=[];
    private drink:Drink[]=[];
    constructor(private id:number){}

    addFood(...food:Food[]){
        this.food = this.food.concat(food);
    }

    addDrink(...drink:Drink[]){
        this.drink = this.drink.concat(drink);
    }

    
}