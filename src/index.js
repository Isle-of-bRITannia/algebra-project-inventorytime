import { rasterize } from "./inventory/observe/rasterize.js";
import { InventoryAPI } from "./inventory/api.js";

let inventory = InventoryAPI.createInventory("test", "cheese", "eggs", "bacon");
console.log(inventory);

inventory = InventoryAPI.addToInventory("test3",inventory);
console.log(inventory);

// inventory = InventoryAPI.renameInventory("renamed",inventory)
// console.log(inventory);

// inventory = InventoryAPI.clearInventory(inventory)
// console.log(inventory);

inventory = InventoryAPI.addToInventory("test5",inventory)
console.log(inventory);

// inventory = InventoryAPI.addToInventory("test6",inventory)
// console.log(inventory);

// inventory = InventoryAPI.addToInventory("test6",inventory)
// console.log(inventory);



//console.log(inventory);

const raster = rasterize()(inventory);

console.log(raster);

console.log("done");
