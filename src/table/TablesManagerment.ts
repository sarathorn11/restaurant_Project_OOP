import {Table} from './Table'

export class TablesManagerment{
    public tables: Table[] =[]


    addTable(table:Table){
        return this.tables.push(table);
    }

    getTable(){
        return this.tables;
    }

    findFreeTable():Table|undefined{
        let result=undefined;
        this.tables.forEach(table=>{
        let allChairs = table.getChairs();
        allChairs.forEach(chair =>{
            if(!chair.hasCustomer()){
                result=table;
                }
            })
        })
        return result;
    }
       
}

