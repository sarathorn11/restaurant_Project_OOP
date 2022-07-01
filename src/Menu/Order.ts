import { DateTime } from "../booking/DateTime";
import { Drink } from "./Drink";
import { Food } from "./Food";

export enum OrderStatus{
    START = "START",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
}

export class Order{
    constructor(private id:number, private foods:Food[], private drinks:Drink[],private customerId:number,private date:DateTime, private status:OrderStatus=OrderStatus.START){}
    
    getFood(){
        return this.foods;
    }

    getDate(){
        return this.date;
    }

    getCustomerId(){
        return this.customerId;
    }

    getId(){
        return this.id;
    }

    getOrderStatus():OrderStatus{
        return this.status;
    }

    setStatus(status:OrderStatus){
        this.status = status;
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