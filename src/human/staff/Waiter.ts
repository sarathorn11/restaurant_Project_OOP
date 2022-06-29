import { Order } from "../../Menu/Order";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff{
  private orders:Order[]=[]
  constructor(category:StaffCategory, id:number, name: string, age: number, gender: Gender,salary:number) {
    super(category,id, name, age, gender);
    this.salary = salary
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

  addOrder(...order:Order[]){
    this.orders=this.orders.concat(order);
  }

}