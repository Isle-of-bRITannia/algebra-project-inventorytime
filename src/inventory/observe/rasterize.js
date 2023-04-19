import { pipe, match } from '../utility/index.js';
import { Alg } from "../algebra.js";
import { Inventory } from '../../../inventory.js';


const rasterize =
  () => match({
    create   : (_name, _items) => {
      return {_name, _items};
    },
    clear: ({_inventory}) =>{
      _inventory._items = []
      return {"_name":_inventory._name, "_items":_inventory._items};
    },
    rename: ({_newName, _inventory})=>{
      _inventory._name = _newName;
      return {"_name":_inventory._name, "_items":_inventory._items};
    },
    add: ({_item, _inventory })=>{
      _inventory._items.push(_item);
      return {"_name":_inventory._name, "_items":_inventory._items};
    }
  });

export {rasterize};