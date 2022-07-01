import { Booking } from './Booking'
export class BookingManagerment{
    private bookings:Booking[]=[]
    
    getBooking(){
        return this.bookings
    }

//demo ---------------------------------------------------------------
    addBooking(oneBooking:Booking){
        let result = "Booking unsuccessful because this chair is already booked or this chair is occupied by another customer."
        if(!oneBooking.getChair().hasCustomer()){
            if(this.bookings.length===0){
                this.bookings.push(oneBooking);
                result = "Booking successfully."
            }else{
                this.bookings.forEach(booking =>{
                    if(!booking.isEqual(oneBooking)){
                        this.bookings.push(oneBooking);
                        result = "Booking successfully."
                    }
                });
            }
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

