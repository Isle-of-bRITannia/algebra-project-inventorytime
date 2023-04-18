import { rasterize } from "./inventory/observe/rasterize.js";
import { InventoryAPI } from "./inventory/api.js";

const inventory = InventoryAPI.renameInventory("cheese",
InventoryAPI.clearInventory(
  InventoryAPI.createInventory("test", "cheese", "eggs", "bacon")
));

//InventoryAPI.addToInventory("cheese", inventory);

console.log(inventory);

const raster = rasterize()(inventory);

console.log(raster);

console.log("done");
