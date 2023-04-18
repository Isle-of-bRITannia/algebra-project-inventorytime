import {Alg} from './algebra.js';
import {pipe} from './utility/index.js';

const API = {
  createInventory: (inventoryName, ..._items)=>Alg.create(inventoryName, _items),
  addToInventory: (item, inventory)=>Alg.add(item, inventory),
  removeFromInventory: (inventory, item)=>Alg.remove(inventory, item),
  replaceInInventory: (inventory, [itemsToRemove], [itemsToAdd])=>(Alg.replace(inventory, itemsToRemove, itemsToAdd)),
  clearInventory: (inventory)=>Alg.clear(inventory),
  duplicate: (inventory, newName)=>Alg.duplicate(inventory, newName),
  renameInventory: (newName, inventory)=>Alg.rename(newName, inventory),
  

  // Exists to import existing images into a tile
  fromImage: (img) => (
    Alg.fromImage(img)
  )
};

export {
  API as InventoryAPI
}