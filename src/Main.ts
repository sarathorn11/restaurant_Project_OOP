
import { Restaurant } from "./Restaurant";
import { Chair } from "./table/Chair";
import { Table } from "./table/Table";
let restaurant = new Restaurant('SN SR restaurant','Siem Reap');
let table1 = new Table(1);
let chair1 = new Chair(1);
let chair2 = new Chair(2);
let chair3 = new Chair(3);
let chair4 = new Chair(4);
table1.addChair(chair1,chair2,chair3,chair4);

let table2 = new Table(2);
let chair5 = new Chair(5);
let chair6 = new Chair(6);
let chair7 = new Chair(7);
let chair8 = new Chair(8);
table2.addChair(chair5,chair6,chair7,chair8);

let table3 = new Table(3);
let chair9 = new Chair(9);
let chair10 = new Chair(10);
let chair11 = new Chair(11);
let chair12 = new Chair(12);
table3.addChair(chair9,chair10,chair11,chair12);

restaurant.table.addTable(table1);
restaurant.table.addTable(table2);
restaurant.table.addTable(table3);

console.log(restaurant)


