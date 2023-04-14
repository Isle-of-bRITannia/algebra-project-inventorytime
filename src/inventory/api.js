import {Alg} from './algebra.js';
import {pipe} from './utility/index.js';

const API = {
  addToInventory: (...items) => Alg.add(...items),
  removeFromInventory: (...items) => Alg.remove(...items),
  replaceInInventory: ([...itemsToRemove], [...itemsToAdd])=>(Alg.replace(itemsToRemove, itemsToAdd)),
  

  // Exists to import existing images into a tile
  fromImage: (img) => (
    Alg.fromImage(img)
  )
};

export {
  API as Inventory
}