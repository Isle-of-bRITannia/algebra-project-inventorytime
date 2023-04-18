class Inventory {
    constructor(_name){
        this.name = _name;
        this.inventory = {};
    }

    dulpicate(_newName){
        const copy = new Inventory(_newName);
        copy.inventory = this.inventory
        return copy;
    }

    empty(){
        this.inventory = {};
        return this
    }

    addItem(item){
        if(this.inventory[item.name] !== null || this.inventory[item.name] !== undefined){
            this.inventory[item.name] = item;
        }else{
            this.inventory[item.name].adjustCategory(item.category);
            this.inventory[item.name].addToQuantity(item.quantity);
        }
        return this;
    }

    remove(item){
        delete this.inventory[item];
        return this;
    }
}