import { Customer,PaidStatus } from "../customer/Customer";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Cashier extends Staff{
    public customers: Customer[] = [];
    constructor(category:StaffCategory, id:number, name: string, age: number, gender: Gender) {
      super(category,id, name, age, gender);
      
    }

    checkBill(customer:Customer):number{
      let customerSpending = 0;
      let allOrders = customer.orders;
      allOrders.forEach(order =>{
        customerSpending += order.getTotalPrice()
      })
    
      customer.setPayedStatus(PaidStatus.PAID);
      if (this.customers.length === 0) {
        this.customers.push(customer);
      } else {
        this.customers.forEach(oneCustomer => {
          if (oneCustomer.getPayedStatus() === PaidStatus.NOT_PAID) {
            this.customers.push(customer);
          }
        })
      }
      return customerSpending;
    }
    

    getSalary(): number {
      let salary: number = 0;
      this.customers.forEach(customer =>{
        salary+=(this.checkBill(customer)/10)
      })
      return salary;
    }

}