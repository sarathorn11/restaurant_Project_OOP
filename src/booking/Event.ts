
import { Booking } from './Booking'
export abstract class Event{
    private bookings:Booking[]=[]

    constructor() {}

    addBooking(booking:Booking){
        this.bookings.push(booking)
    }
    removerBooking(Abooking:Booking){
        for (let i=0; i<this.bookings.length;i++){
            if (this.bookings[i].isEqual(Abooking)){
                this.bookings.splice(i, 1)
            }
        }
    }
   

}