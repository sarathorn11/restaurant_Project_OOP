
import { Chair } from "../table/Chair";
import {DateTime} from './DateTime'
import { Customer } from "../human/customer/Customer";
export class Booking {
    constructor(datetime:DateTime,private customer: Customer, private chair:Chair){}

    addCustomer(customer: Customer){
        this.customer = customer;
    }
    getCustomer(){
        return this.customer
    }
    
    addChair(chair:Chair){
        this.chair =chair;
    }
    getChair(){
        return this.chair
    }

    isEqual(other: Booking):boolean{
       let result = false;
        if(this.getCustomer().isEqual(other.getCustomer()) && this.getChair().isEqual(other.getChair())){
            result = true;
        }
        return result;
    }
  
}
