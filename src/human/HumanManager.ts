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
        customer.getOrders().forEach(order => {

        })
      })
      return revenue;
    }

}