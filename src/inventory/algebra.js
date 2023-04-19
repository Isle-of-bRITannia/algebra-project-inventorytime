const Alg = {
  create: (_name, _items)=>({
    _tag: 'create',
    _name,
    _items
  }),
  clear: (_inventory)=>({
    _tag: 'clear',
    _inventory
  }),
  rename: (_newName, _inventory)=>({
    _tag: 'rename',
    _newName,
    _inventory
  }),
  add: (_item, _inventory)=>({
    _tag: 'add',
    _item,
    _inventory
  }),
  remove: (_inventory, _item)=>({
    _tag: 'remove',
    _inventory,
    _item
  }),
  replace: (_inventory, _itemToRemove, _itemToAdd) =>({
    _tag: 'replace',
    _itemToRemove,
    _itemToAdd
  }),
};

export {
  Alg
};