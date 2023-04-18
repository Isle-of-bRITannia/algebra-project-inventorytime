import { pipe, match } from '../utility/index.js';
import { Alg } from "../algebra.js";
import { Inventory } from '../../../inventory.js';


const rasterize =
  () => match({
    create   : ({_name, _items}) => {
      return {"name":_name,"items": _items};
    },
    clear: ({_inventory}) =>{
      _inventory._items = [];
      return {"name":_inventory._name,"items": _inventory._items};
    },
    rename: ({_inventory, _newName})=>{
      
      return {"name":_newName,"items": _inventory._items};
    },
    add: ({_item,_inventory})=>{
      _inventory._items.push(_item)
      return {"name":inventory._name,"items": inventory._items}
    }


    // FlipH: ({tile}) => {
    //   return pipe(
    //     rasterize({width: height, height: width}),
    //     map(reverse)
    //   )(tile);
    // },
    // Above: ({tiles}) => {
    //   if (tiles.length === 0) throw new Error('Yeah nah you can\'t pass nothing to Above');
    //   if (tiles.length === 1) return rasterize({width, height})(tiles[0]);

    //   if (height >= tiles.length) {
    //     const h = Math.floor(height / tiles.length);
    //     return [
    //       ...rasterize({width, height: h})(tiles[0]),
    //       ...rasterize({width, height: height - h})(Alg.above(...tiles.slice(1)))
    //     ];
    //   }
                         
    //   const zSpan = tiles.length / height;
    //   return rasterize({width, height})(
    //     Alg.above(
    //       ...Array(height).fill(null).map((_, i) => tiles[Math.floor(i * zSpan)])
    //     )
    //   );
    // },
    // Pure : ({value}) => {
    //   return pipe(
    //     repeat(width), repeat(height)
    //   )(value);
    // },
    // Ap   : ({functionTile, domainTile}) => {
    //   const functionRaster = rasterize({width, height})(functionTile);
    //   const domainRaster = rasterize({width, height})(domainTile);
      
    //   return functionRaster.map((row, i) => row.map((f, j) => f(domainRaster[i][j])));
    // },
    // FromImage: ({img}) => {
    //   let imgCanvas = document.createElement('canvas');
    //   imgCanvas.width = width;
    //   imgCanvas.height = height;
    //   let ctx = imgCanvas.getContext('2d');
      
    //   ctx.drawImage(img, 0, 0, width, height);

    //   const data = ctx.getImageData(0, 0, width, height).data;

    //   let matrix = splitEvery(4)([...data])
    //     .map(([r, g, b, a]) => `rgba(${r}, ${g}, ${b}, ${a / 255})`)
    //     .reduce(({matrix, row}, rgba) => {
    //       return row.length === width - 1
    //         ? {matrix: [...matrix, [...row, rgba]], row: []}
    //         : {matrix: matrix, row: [...row, rgba]};
    //     }, {matrix: [], row: []})
    //     .matrix;
                            
    //   return matrix;
    //}
  });

export {rasterize};