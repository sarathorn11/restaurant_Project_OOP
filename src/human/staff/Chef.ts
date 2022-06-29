import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Chef extends Staff{
    constructor(category:StaffCategory, id:number, name: string, age: number, gender: Gender) {
      super(category,id, name, age, gender);
    }
}