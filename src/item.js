class Item {
    constructor(_name, _category, _quantity){
        this.name = _name;
        this.category = _category;
        this.quantity = _quantity
    }

    addToQuantity(toAdd){
        this.quantity += toAdd;
        return this;
    }

    adjustQuantity(_newQuantity){
        this.quantity = _newQuantity;
        return this;
    }

    adjustCategory(_newCategory){
        this.category = _newCategory;
        return this;
    }
}