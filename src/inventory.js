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

    populate(..._items){
        _items.forEach((item)=>{
            if(this.inventory[item.name] !== null || this.inventory[item.name] !== undefined){
                this.inventory[item.name] = item;
            }else{
                this.inventory[item.name].adjustCategory(item.category);
                this.inventory[item.name].adjustQuantity(this.inventory[item.name]+item.quantity);
            }
        })
        return this;
    }

    remove(..._itemNames){
        _itemNames.forEach((item)=>{
            delete this.inventory[item];
        })
        return this;
    }
}