
import { Restaurant } from "./Restaurant";
import {Customer } from "./human/customer/Customer";
import {Person,Gender} from "./human/Person";
import {Table } from "./table/Table";
import {Chair} from "./table/Chair";
import {Booking} from "./booking/Booking";
import {DateTime} from "./booking/DateTime";
import {Cashier} from "./human/staff/Cashier"
import {Chef} from "./human/staff/Chef";
import {Security} from "./human/staff/Security";
import {Waiter} from "./human/staff/Waiter";
import {Staff,StaffCategory} from "./human/staff/Staff";
import {Food,FoodCategory} from "./Menu/Food";
import {Drink,DrinkCategory} from "./Menu/Drink";
import {MenuItem} from "./Menu/MenuItem";
import {Order} from "./Menu/Order";





let restaurant = new Restaurant('SN SR restaurant','Siem Reap');
//create customers
let Nge = new Customer(1,'Nge',18,Gender.MALE);
let Sarath = new Customer(2,'Sarath',14,Gender.MALE);

//Create staffs
let Tim= new Security(StaffCategory.SECURITY,1,'Tim',70,Gender.MALE);
let MengYi= new Chef(StaffCategory.CHEF,2,'MengYi',30,Gender.MALE);
let Khy= new Waiter(StaffCategory.WAITER,3,'Khy',20,Gender.MALE);
let Vichet= new Waiter(StaffCategory.WAITER,4,'Khy',20,Gender.MALE);
let Sok= new Waiter(StaffCategory.WAITER,5,'Khy',20,Gender.MALE);
let SreyMoa= new Waiter(StaffCategory.WAITER,6,'Khy',20,Gender.FEMALE);
let Sophiem= new Waiter(StaffCategory.WAITER,7,'Sophiem',20,Gender.FEMALE);
let Vibol= new Waiter(StaffCategory.WAITER,8,'Vibol',20,Gender.MALE);
let Seiha= new Waiter(StaffCategory.WAITER,9,'Seiha',20,Gender.MALE);
let Sao= new Cashier(StaffCategory.CASHIER,10,'Sao',20,Gender.MALE);
let Phim= new Security(StaffCategory.SECURITY,11,'Phim',21,Gender.MALE);
let Theavy = new Chef(StaffCategory.CHEF,12,'Theavy',25,Gender.FEMALE);
let Sauth = new Chef(StaffCategory.CHEF,13,'Sauth',30,Gender.MALE);
let Sopha = new Chef(StaffCategory.CHEF,14,'Sopha',18,Gender.MALE);


//create tables
let table1= new Table(1);
let table2= new Table(2);

//create chairs
//table1
let chair1 = new Chair(1);
let chair2 = new Chair(2);
let chair3 = new Chair(3);
let chair4 = new Chair(4);
//table2
let chair5 = new Chair(5);
let chair6 = new Chair(6);
let chair7 = new Chair(7);
let chair8 = new Chair(8);

//create date for booking
let date1 = new DateTime(9,3,2022,8);


//create booking
let booking1 = new Booking(date1,chair2)
let booking2 = new Booking(date1,chair3)
booking1.addCustomerBooking(Sarath)
booking2.addCustomerBooking(Nge)

//create food
let food1 = new Food('BBQ',12,FoodCategory.DESSERT,2)
let food2 = new Food('BaBa',12,FoodCategory.APPETIZER,3)


//create drinks
let drink1 = new Drink('KoKa',10,DrinkCategory.COLD_DRINK,1)
let drink2 = new Drink('ABC',1,DrinkCategory.COLD_DRINK,3)


//create MenuItem
let menuItem1 = new MenuItem(1)

//create order
let order1 = new Order(1,[food1,food2],[drink1],1)
let order2 = new Order(2,[food2],[drink2],2)


//-------------------------------------------------
//add customers
restaurant.human.addCustomer(Nge,Sarath);

//add staffs
restaurant.human.addStaff(Tim,MengYi,Khy,Sao,Phim,Vibol,Vichet,Sauth,Seiha,Sok,SreyMoa,Sophiem,Sopha,Theavy)

//add tables
restaurant.table.addTable(table1);
restaurant.table.addTable(table2);

//add booking
restaurant.booking.addBooking(booking1)
restaurant.booking.addBooking(booking2)

//add MenuItem
restaurant.menu.addMenu(menuItem1)

//add chairs
//table1
table1.addChair(chair1);
table1.addChair(chair2);
table1.addChair(chair3);
table1.addChair(chair4);
//table2
table2.addChair(chair5);
table2.addChair(chair6);
table2.addChair(chair7);
table2.addChair(chair8);

//add customers to chair
// chair1.setCustomer(Nge)
// chair5.setCustomer(Sarath)


//add Drink to menu
menuItem1.addFood(food1)
menuItem1.addDrink(drink1);

//add order in to customer
Sao.addOrder(order1);
Sao.addOrder(order2);


// //check bill for customers
console.log(Sao.checkBill(Nge));
console.log(Sao.checkBill(Sarath));

//total revenue in the restaurant
console.log("The restaurant total revenue is " +restaurant.human.getTotalRevenue()+"$ this month.");
console.log("Each cashier get paid "+Math.round(restaurant.human.getSalaryCashier())+"$ this month.");
console.log("Each chef get paid "+Math.round(restaurant.human.getSalaryChef())+"$ this month.");
console.log("Each security get paid "+Math.round(restaurant.human.getSalarySecurity())+"$ this month.");
console.log("Each waiter get paid "+Math.round(restaurant.human.getSalaryWaiter())+"$ this month.");

// console.log("The restaurant get a profit of "+(restaurant.human.getTotalRevenue()-(Math.round(restaurant.human.getSalaryCashier())+
// Math.round(restaurant.human.getSalaryChef())+Math.round(restaurant.human.getSalarySecurity())+Math.round(restaurant.human.getSalaryWaiter())))+"$ per month");


//remove booking
// restaurant.booking.removerBooking(booking1)

// console.log(restaurant.human.getStaffs());






