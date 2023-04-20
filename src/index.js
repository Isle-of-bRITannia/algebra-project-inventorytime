import { toNameAndItems } from "./inventory/observe/toNameAndItems.js";
import { InventoryAPI } from "./inventory/api.js";
import { displayInventory } from "./inventory/observe/display.js";

let inventory = InventoryAPI.createInventory("test", "cheese", "eggs", "bacon");

inventory = InventoryAPI.addToInventory("test3",inventory);

inventory = InventoryAPI.renameInventory("renamed",inventory)

inventory = InventoryAPI.clearInventory(inventory)

inventory = InventoryAPI.addToInventory("test5",inventory)

inventory = InventoryAPI.addToInventory("test6",inventory)

inventory = InventoryAPI.addToInventory("test7",inventory)

inventory = InventoryAPI.removeFromInventory("test5",inventory)

inventory = InventoryAPI.replaceInInventory(inventory, "test6", "test8")    //need to fix . Adds but does not remove

//console.log(inventory);

const returnedInventory = toNameAndItems(inventory);

const display = displayInventory(returnedInventory);

console.log("done");
