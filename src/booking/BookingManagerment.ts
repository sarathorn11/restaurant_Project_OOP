import {Event} from './Event'
export class BookingManagerment{
    public events: Event[] = []
    

    addEvent(events:Event){
        return this.events.push(events)
    }


}

