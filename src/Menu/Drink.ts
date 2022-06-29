export enum DrinkCategory{
    COLD_DRINK = "COLD_DRINK",
    HOT_DRINK = "HOT_DRINK",
    SOFT_DRINK = "SOFT_DRINK",
    SMOOTHIE= "SMOOTHIE"
}

export class Drink{
    constructor(private name: string, private price: number, private drinkCategory:DrinkCategory){}

    getPrice():number{
        return this.price;
    }

    getCategory():DrinkCategory{
        return this.drinkCategory;
    }

    getName():string{
        return this.name;
    }

    isEqual(other:Drink):boolean{
        let isEqual = false;
        if(this.getName() === other.getName() && this.getCategory() === other.getCategory() && this.getPrice() === other.getPrice()){
            isEqual = true;
        }
        return isEqual;
    }
}