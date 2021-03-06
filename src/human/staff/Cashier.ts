import { Order, OrderStatus } from "../../Menu/Order";
import { Customer,PaidStatus } from "../customer/Customer";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Cashier extends Staff{
    public orders:Order[]=[];
    constructor(category:StaffCategory, id:number, name: string, age: number, gender: Gender) {
      super(category,id, name, age, gender);
      
    }

    addOrder(...order:Order[]){
      this.orders.push(...order);
    }

    getOrders():Order[]{
      return this.orders;
    }

    checkBill(customer:Customer):number{
      let customerSpending = 0;
      let allOrders = this.orders;
      allOrders.forEach(order => {
        if((order.getCustomerId() === customer.getCustomerId())&&(order.getOrderStatus()===OrderStatus.DONE)||
        (order.getOrderStatus()===OrderStatus.IN_PROGRESS)){
          customerSpending+=order.getTotalPrice();
          customer.setPayedStatus(PaidStatus.PAID);
        }
      })
      return customerSpending;
    };
}