import { MenuItem } from "./MenuItem";

export abstract class Menu{
    private menu:MenuItem[]=[];

    addMenu(menuItem:MenuItem){
        this.menu.push(menuItem);
    }
}