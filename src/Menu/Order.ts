import { Drink } from "./Drink";
import { Food } from "./Food";

import { Menu } from "./Menu";

export class Order{

   
  


    constructor(private foods:Food[], private drinks:Drink[]){}
    
    getFood(){
        return this.foods;
    }

    getDrink(){
        return this.drinks;
    }

    addFood(...food:Food[]){
        this.foods = this.foods.concat(food);
    }

    addDrink(...drink:Drink[]){
        this.drinks = this.drinks.concat(drink);
    }

    getTotalPrice(){
        let prices=0;
        this.getFood().forEach(food =>{
            prices += food.getPrice();
        });
        this.getDrink().forEach(drink =>{
            prices += drink.getPrice();
        });
        return prices;
    }
}