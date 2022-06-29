import { Drink } from "../Menu/Drink";
import { Food } from "../Menu/Food";
import { OrderStatus } from "../Menu/Order";
import { Customer } from "./customer/Customer";
import { Cashier } from "./staff/Cashier";
import { Chef } from "./staff/Chef";
import { Security } from "./staff/Security";
import { Staff, StaffCategory } from "./staff/Staff";
import { Waiter } from "./staff/Waiter";

export enum SalaryPercentage{
  CASHIER = (5/100),
  SECURITY = (5/100),
  CHEF = (35/100),
  WAITER = (20/100),
}

export class HumanManagement{
    public customers:Customer[]=[];
    public staffs:Staff[]=[];

    addCustomer(...customer: Customer[]) {
      this.customers= this.customers.concat(customer);
    }
  
    getCustomers() {
      return this.customers;
    }
  
    addStaff(...staff: Staff[]) {
      this.staffs= this.staffs.concat(staff);
    }
  
    getStaffs() {
      return this.staffs;
    }

    getTotalRevenue() {
      let revenue = 0;
      for(let staff of this.staffs) {
        if(staff.getCategory() === StaffCategory.CASHIER){
          let cashier = staff as Cashier;
          for(let order of cashier.getOrders()) {
            if((order.getOrderStatus()===OrderStatus.DONE)||(order.getOrderStatus()===OrderStatus.IN_PROGRESS)){
              revenue += order.getTotalPrice();
            }
          }
        }
      }
      return revenue;
    }

    getSalaryCashier(): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let cashier = staff as Cashier;
        if(cashier.getCategory() === StaffCategory.CASHIER){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue()*SalaryPercentage.CASHIER)/numberStaffs)
      return salary;
    }

    getSalaryChef(): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let chef = staff as Chef;
        if(chef.getCategory() === StaffCategory.CHEF){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue()*SalaryPercentage.CHEF)/numberStaffs)
      return salary;
    }

    getSalarySecurity(): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let security = staff as Security;
        if(security.getCategory() === StaffCategory.SECURITY){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue()*SalaryPercentage.SECURITY)/numberStaffs)
      return salary;
    }

    getSalaryWaiter(): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let waiter = staff as Waiter;
        if(waiter.getCategory() === StaffCategory.WAITER){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue()*SalaryPercentage.WAITER)/numberStaffs)
      return salary;
    }
}