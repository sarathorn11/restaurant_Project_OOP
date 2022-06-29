import { Drink } from "../Menu/Drink";
import { Food } from "../Menu/Food";
import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class HumanManagement{
    public customers:Customer[]=[];
    private staffs:Staff[]=[];

    addCustomer(customer: Customer) {
      this.customers.push(customer);
    }
  
    getCustomers() {
      return this.customers;
    }
  
    addStaff(staff: Staff) {
      this.staffs.push(staff);
    }
  
    getStaffs() {
      return this.staffs;
    }

    getTotalRevenue():number {
      let revenue = 0;
      this.getCustomers().forEach(customer => {
        customer.orders.forEach(order =>{
          revenue += order.getTotalPrice()
        });
      })
      return revenue;
    }

    getCustomersWithFood(foodToFind:Food){
      let allCustomers:Customer[] = [];
      this.getCustomers().forEach(customer =>{
        customer.getOrders().forEach(order =>{
          order.getFood().forEach(food=>{
            if(food.isEqual(foodToFind)){
              allCustomers.push(customer);
            }
          });
        });
      });
      return allCustomers;
    }

    getCustomersWithDrink(drinkToFind:Drink){
      let allCustomers:Customer[] = [];
      this.getCustomers().forEach(customer =>{
        customer.getOrders().forEach(order =>{
          order.getDrink().forEach(drink=>{
            if(drink.isEqual(drinkToFind)){
              allCustomers.push(customer);
            }
          });
        });
      });
      return allCustomers;
    }

}