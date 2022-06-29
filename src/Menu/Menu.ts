import { MenuItem } from "./MenuItem";

export class Menu{
    private menu:MenuItem[]=[];
    
    addMenu(menuItem:MenuItem){
        this.menu.push(menuItem);
    }
}