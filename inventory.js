export class Inventory {
    constructor(_name, _inventory = []){
        this.name = _name;
        this.inventory = _inventory;
    }

    dulpicate(_newName){
        const copy = new Inventory(_newName);
        copy.inventory = this.inventory
        return copy;
    }

    empty(){
        this.inventory = [];
        return this
    }

    addItem(item){ //need to switch to arr instead 
        if(this.inventory[item.name] !== null || this.inventory[item.name] !== undefined){
            this.inventory[item.name] = item;
        }else{
            this.inventory[item.name].adjust("category",item.category);
            this.inventory[item.name].adjust("quantity",this.inventory[item.name]+item.quantity);
        }
        return this;
    }

    remove(_item){
        const index = this.inventory.indexOf(_item);
        if(index > -1){
            this.inventory.splice(index,1);
        }
        return this;
    }
}