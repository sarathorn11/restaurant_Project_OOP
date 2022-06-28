import {Customer} from '../human/customer/Customer'
export class Chair{
    private customer?:Customer=undefined;

    constructor(private id:number){}

    setCustomer(customer:Customer){
        this.customer = customer;
    }
    hasCustomer(){
        return this.customer!=undefined;
    }
    getCustomer(){
        return this.customer;
    }
    removeCustomer(){
        this.customer = undefined;
    }
    getChair(){
        return this.id
    }
    
    isEqual(other:Chair): boolean{
        let result:boolean = false
        if(this.getChair() === other.id){
            result = true
        }
        return result
        
    }

    

}