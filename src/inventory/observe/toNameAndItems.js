import { pipe, match } from '../utility/index.js';
import { Alg } from "../algebra.js";
import { Inventory } from '../../../inventory.js';


const toNameAndItems = match({
  create: ({ _name, _items }) => {
    return {
      name: _name,
      items: _items
    };
  },
  clear: ({ _inventory }) => {
    const previousNameAndItems = toNameAndItems(_inventory);
    
    return {
      name: previousNameAndItems.name,
      items: []
    };
  },
  rename: ({ _newName, _inventory }) => {
    const previousNameAndItems = toNameAndItems(_inventory);

    return {
      name: _newName,
      items: previousNameAndItems.items
    };
  },
  add: ({ _item, _inventory }) => {
    const previousNameAndItems = toNameAndItems(_inventory);
    const newItems = [...previousNameAndItems.items, _item];

    return {
      name: previousNameAndItems.name,
      items: newItems
    }
  },
  remove: ({ _item, _inventory }) => {
    const previousNameAndItems = toNameAndItems(_inventory);
    if(previousNameAndItems.items.indexOf(_item) !== -1){
      const result = previousNameAndItems.items.splice(previousNameAndItems.items.indexOf(_item), 1);
    }
    return previousNameAndItems;
  }
});

export { toNameAndItems };