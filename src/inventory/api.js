import {Alg} from './algebra.js';
import {pipe} from './utility/index.js';

const API = {
  createInventory: (inventoryName, ..._items)=>Alg.create(inventoryName, _items),
  addToInventory: (item, inventory)=>Alg.add(item, inventory),
  removeFromInventory: (item, inventory)=>Alg.remove(item, inventory),
  replaceInInventory: (inventory, itemToRemove, itemsToAdd)=> {
    const returned = Alg.remove(itemToRemove, inventory);
    return Alg.add(itemsToAdd, returned);
  },
  clearInventory: (inventory)=>Alg.clear(inventory),
  //duplicate: (inventory, newName)=>Alg.duplicate(inventory, newName),   //to implement
  renameInventory: (newName, inventory)=>Alg.rename(newName, inventory),
  

  // Exists to import existing images into a tile
  fromImage: (img) => (
    Alg.fromImage(img)
  )
};

export {
  API as InventoryAPI
}