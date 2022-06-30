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
        let result = "Booking unsuccessful because this chair is already booked."
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

