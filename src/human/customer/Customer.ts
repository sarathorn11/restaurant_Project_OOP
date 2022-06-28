import { Order } from "../../Menu/Order";
import { Gender, Person } from "../Person";

export class Customer extends Person{
    public orders:Order[]=[];
    constructor(id:number, name: string, age: number, gender: Gender) {
        super(id, name, age, gender);
    }

    getOrders(){
        return this.orders;
    }

    getName(): string {
    return this.name;
    }

    getAge(): number {
    return this.age;
    }

    getGender(): Gender {
        return this.gender;
    }
    
    isEqual(other:Customer):boolean{
        let sameCustomer = false;
        if(this.id===other.id && this.getName()===other.getName() && this.getAge()===other.getAge() && this.getGender()===other.getGender()){
            sameCustomer = true
        }
        return sameCustomer;
    }
}