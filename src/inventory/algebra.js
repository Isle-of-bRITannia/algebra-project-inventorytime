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
  remove: (_item, _inventory)=>({
    _tag: 'remove',
    _item,
    _inventory
  }),
};

export {
  Alg
};