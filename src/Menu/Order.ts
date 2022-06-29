import { Drink } from "./Drink";
import { Food } from "./Food";

export class Order{

    constructor(private id:number, private foods:Food[], private drinks:Drink[],private customerId:number){}
    
    getFood(){
        return this.foods;
    }

    getCustomerId(){
        return this.customerId;
    }

    getId(){
        return this.id;
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
            prices += (food.getPrice()*food.getQuantity());
        });
        this.getDrink().forEach(drink =>{
            prices += (drink.getPrice()*drink.getQuantity());
        });
        return prices;
    }
}