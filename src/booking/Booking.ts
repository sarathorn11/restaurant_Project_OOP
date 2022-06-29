
import { Chair } from "../table/Chair";
import {DateTime} from './DateTime'
import { Customer } from "../human/customer/Customer";
export class Booking {
    constructor(private datetime:DateTime, private chair:Chair){}


    addCustomerBooking(customer: Customer){
        if(!this.chair.hasCustomer()){
            this.chair.setCustomer(customer);
        }

    }

   
    
    addChair(chair:Chair){
        this.chair = chair;
    }
    getChair(){
        return this.chair
    }

   
    isEqual(other: Booking):boolean{
       let result = false;
        if(this.getChair().isEqual(other.getChair())){
            result = true;
        }
        return result;
    }
  
}
