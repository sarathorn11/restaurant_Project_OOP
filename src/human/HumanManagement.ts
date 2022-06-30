import { Drink } from "../Menu/Drink";
import { Food } from "../Menu/Food";
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

export enum Months{
  JANUARY = 1,
  FEBRUARY = 2,
  MARCH = 3,
  APRIL = 4,
  MAY = 5,
  JUNE = 6,
  JULY = 7,
  AUGUST = 8,
  SEPTEMBER = 9,
  OCTOBER = 10,
  NOVEMBER = 11,
  DECEMBER = 12
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

    getTotalRevenue(month:Months) {
      let revenue = 0;
      for(let staff of this.staffs) {
        if(staff.getCategory() === StaffCategory.CASHIER){
          let cashier = staff as Cashier;
          for(let order of cashier.getOrders()) {
            if(order.getDate().month === month){
              revenue += order.getTotalPrice();
            }
          }
        }
      }
      return revenue;
    }

    getSalaryCashier(month:Months): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let cashier = staff as Cashier;
        if(cashier.getCategory() === StaffCategory.CASHIER){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue(month)*SalaryPercentage.CASHIER)/numberStaffs)
      return salary;
    }

    getSalaryChef(month:Months): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let chef = staff as Chef;
        if(chef.getCategory() === StaffCategory.CHEF){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue(month)*SalaryPercentage.CHEF)/numberStaffs)
      return salary;
    }

    getSalarySecurity(month:Months): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let security = staff as Security;
        if(security.getCategory() === StaffCategory.SECURITY){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue(month)*SalaryPercentage.SECURITY)/numberStaffs)
      return salary;
    }

    getSalaryWaiter(month:Months): number {
      let salary: number = 0;
      let numberStaffs = 0;
      this.getStaffs().forEach(staff =>{
        let waiter = staff as Waiter;
        if(waiter.getCategory() === StaffCategory.WAITER){
          numberStaffs++;
        }
      });
      salary+=((this.getTotalRevenue(month)*SalaryPercentage.WAITER)/numberStaffs)
      return salary;
    }
}