import { Customer } from "../customer/Customer";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Cashier extends Staff{
    constructor(category:StaffCategory, id:number, name: string, age: number, gender: Gender,salary:number) {
      super(category,id, name, age, gender);
      this.salary = salary
    }

    checkBill(customer:Customer):number{
      let customerSpending = 0;
      let allOrders = customer.orders;
      allOrders.forEach(order =>{
        customerSpending += order.getTotalPrice()
      })
      return customerSpending;
    }
}