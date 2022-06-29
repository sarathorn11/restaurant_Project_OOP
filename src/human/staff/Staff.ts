import { Gender, Person } from "../Person";

export enum StaffCategory {
  CHEF = "CHEF",
  WAITER = "WAITER",
  CASHIER = "CASHIER",
  SECURITY = "SECURITY",
}

/**
 * A staff is a personn of the hospital with a salary
 */
export class Staff extends Person {
  protected salary: number = 0; // by default
  constructor(
    protected category: StaffCategory,
    id:number,
    name: string,
    age: number,
    gender: Gender
    ) {
      super(id, name, age, gender);
    }
    
    
    getCategory():StaffCategory{
      return this.category;
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