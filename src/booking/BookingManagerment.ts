import { Booking } from './Booking'
export class BookingManagerment{
    public bookings:Booking[]=[]
    
    getBooking(){
        return this.bookings
    }

    // haveCustomer(){
    //     this.bookings.forEach(booking => {
    //         return booking.getChair().getCustomer()?.getName();
    //     })
    // }


    addBooking(oneBooking:Booking){
        if(this.bookings.length===0){
            this.bookings.push(oneBooking);
        }else{
            this.bookings.forEach(booking =>{
                if(!booking.isEqual(oneBooking)){
                    this.bookings.push(oneBooking);
                }
        });
        }
  
    }

    removerBooking(Abooking:Booking){
        for (let i=0; i<this.bookings.length;i++){
            if (this.bookings[i].isEqual(Abooking)){
                this.bookings.splice(i, 1)
            }
        }
    }
}

