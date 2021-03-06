import {Chair} from './Chair';
export class Table{
    private chairs: Chair[] = [];
    constructor(private id:number){}

    getNumberOfChair(){
        return this.chairs.length;
    }
    getChairs(){
        return this.chairs;
    }
    addChair(...chair:Chair[]){
        this.chairs = this.chairs.concat(chair);
    }
}