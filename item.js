class Item {
    constructor(_name, _category, _quantity, _properties){
        this.name = _name;              //str
        this.category = _category;      //str
        this.quantity = _quantity;      //int
        this.properties = _properties;  //obj
    }

    adjust(_prop, _newName){
        this._prop = _newName;
        return this;
    }

    belongsToCategory(_category){
        if(this.category === _category)
            return true;
        return false;
    }

    addProperty(_propertyKey, _propertyValue){
        this.properties._propertyKey = _propertyValue;
        return this;
    }

    doesPropertyExist(_propertyKey){
        Object.keys(this.properties).forEach((key)=>{
            if(key === _propertyKey) return true;
        })
    }

    // addToQuantity(_toAdd){
    //     this.quantity += _toAdd;
    //     return this;
    // }

    // adjustQuantity(_newQuantity){
    //     this.quantity = _newQuantity;
    //     return this;
    // }

    // adjustCategory(_newCategory){
    //     this.category = _newCategory;
    //     return this;
    // }
}