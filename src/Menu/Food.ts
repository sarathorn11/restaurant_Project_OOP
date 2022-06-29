enum FoodCategory{
    APPETIZER = "APPETIZER",
    MAIN_COURSE = "MAIN_COURSE",
    DESSERT = "DESSERT"
}

export class Food{
    constructor(private name: string, private price: number, private foodCategory:FoodCategory){}

    getPrice():number{
        return this.price;
    }

    getCategory():FoodCategory{
        return this.foodCategory;
    }

    getName():string{
        return this.name;
    }

    isEqual(other:Food):boolean{
        let isEqual = false;
        if(this.getName() === other.getName() && this.getCategory() === other.getCategory() && this.getPrice() === other.getPrice()){
            isEqual = true;
        }
        return isEqual;
    }
}