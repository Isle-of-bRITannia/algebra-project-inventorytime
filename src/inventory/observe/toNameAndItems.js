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
    previousNameAndItems.items.forEach(element => {
      if(element.name == _item){
        previousNameAndItems.items.splice(previousNameAndItems.items.indexOf(element), 1);
      }
    });
    return previousNameAndItems;
  }
});

export { toNameAndItems };