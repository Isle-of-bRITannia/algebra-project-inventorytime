const Alg = {
  add: (...items)=>({
    _tag: 'add',
    items
  }),
  remove: (...items)=>({
    _tag: 'remove',
    items
  }),
  replace: (itemsToRemove, itemsToAdd) =>({
    _tag: 'replace',
    itemsToRemove,
    itemsToAdd
  }),
  
  

  // Unfortunate but (as far as I can currently tell) somewhat necessary.
  // fromImage: (img) => {
  //   return {
  //     _tag: 'FromImage',
  //     img
  //   };
  // }
};

export {
  Alg
};