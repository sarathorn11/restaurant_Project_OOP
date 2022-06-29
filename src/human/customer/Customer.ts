import { Order } from "../../Menu/Order";
import { Gender, Person } from "../Person";

export enum PaidStatus {
    PAID= "PAID",
    NOT_PAID= "NOT_PAID",
}

export class Customer extends Person{
    public orders:Order[]=[];
    constructor(id:number, name: string, age: number, gender: Gender,private paidStatus:PaidStatus=PaidStatus.NOT_PAID) {
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
    addOrder(order:Order){
        this.orders.push(order);
    }

    getGender(): Gender {
        return this.gender;
    }

    getPayedStatus():PaidStatus{
        return this.paidStatus;
    }
    
    setPayedStatus(status:PaidStatus){
        this.paidStatus = status;
    }

    
    isEqual(other:Customer):boolean{
        let sameCustomer = false;
        if(this.id===other.id && this.getName()===other.getName() && this.getAge()===other.getAge() && this.getGender()===other.getGender()){
            sameCustomer = true
        }
        return sameCustomer;
    }
}