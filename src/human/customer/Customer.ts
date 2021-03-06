import { Order } from "../../Menu/Order";
import { Gender, Person } from "../Person";

export enum PaidStatus{
    PAID = "PAID",
    NOT_PAID = "NOT_PAID",
}

export class Customer extends Person{
    constructor(id:number, name: string, age: number, gender: Gender,private paidStatus:PaidStatus=PaidStatus.NOT_PAID) {
        super(id, name, age, gender);
    }

    getPayedStatus():PaidStatus{
        return this.paidStatus;
    }

    getCustomerId():number {
        return this.id;
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
        if(this.id===other.id && this.getName()===other.getName() && this.getAge()===other.getAge() && this.getGender()===other.getGender() && this.getPayedStatus()===other.getPayedStatus()){
            sameCustomer = true
        }
        return sameCustomer;
    }
    setPayedStatus(status:PaidStatus){
        this.paidStatus = status;
    }
}