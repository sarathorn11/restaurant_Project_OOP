import { TablesManagerment } from "./table/TablesManagerment";
import { BookingManagerment } from "./booking/BookingManagerment";
import {HumanManagement} from "./human/HumanManagement";
import { Menu } from "./Menu/Menu";

export class Restaurant {
  // Restaurant attributes
  private address?: string;
  private name: string;

  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
  // public services
  public table: TablesManagerment = new TablesManagerment();
  public booking: BookingManagerment = new BookingManagerment();
  public human: HumanManagement = new HumanManagement(); 
  public menu: Menu = new Menu(); 
}
