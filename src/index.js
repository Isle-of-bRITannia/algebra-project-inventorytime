import { toNameAndItems } from "./inventory/observe/toNameAndItems.js";
import { InventoryAPI } from "./inventory/api.js";
import { displayInventory } from "./inventory/observe/display.js";
import { Item } from "../item.js";

let inventory = InventoryAPI.createInventory("test", new Item("cheese", "dairy", 3), new Item("eggs", "meat", 12), new Item("bacon", "meat", 10));

inventory = InventoryAPI.addToInventory(new Item("chicken", "meat", 3),inventory);

inventory = InventoryAPI.renameInventory("pantry",inventory)

//inventory = InventoryAPI.clearInventory(inventory)

inventory = InventoryAPI.addToInventory(new Item("chocolate", "dessert", 1),inventory)

inventory = InventoryAPI.addToInventory(new Item("tomatoes", "produce", 8),inventory)

inventory = InventoryAPI.addToInventory(new Item("paprika", "spices", 1),inventory)

inventory = InventoryAPI.removeFromInventory("chocolate",inventory)

inventory = InventoryAPI.replaceInInventory(inventory, "tomatoes", new Item("potatoes", "produce", 2000));  

//console.log(inventory);

const returnedInventory = toNameAndItems(inventory);

const display = displayInventory(returnedInventory);

console.log("done");
