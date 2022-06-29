import { Booking } from './Booking'
export class BookingManagerment{
    public bookings:Booking[]=[]
    
    getBooking(){
        return this.bookings
    }


    addBooking(oneBooking:Booking){
        let result= 'Booking is not successfully,This Chair already have a customer.';
        if(this.bookings.length===0){
            this.bookings.push(oneBooking);
            result='Booking is successfully!';

        }else{
           
            this.bookings.forEach(booking =>{
                if(!booking.isEqual(oneBooking)){
                    this.bookings.push(oneBooking);
                    result='Booking is successfully!';
                    
                }
            });
        }
        console.log(result);
    }
    removerBooking(Abooking:Booking){
        for (let i=0; i<this.bookings.length;i++){
            if (this.bookings[i].isEqual(Abooking)){
                this.bookings.splice(i, 1)
            }
        }
    }
}

