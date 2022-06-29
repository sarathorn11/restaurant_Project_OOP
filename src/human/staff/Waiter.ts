import { Order } from "../../Menu/Order";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff{
  constructor(category:StaffCategory, id:number, name: string, age: number, gender: Gender) {
    super(category,id, name, age, gender);
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

}