import React from 'react';
import Item from './Item'
const ItemList = ({items}) =>{
          let ListTemplate = items.map(item=><Item key={item.id} jsonpack={item} />);
console.log("array de items: en ItemList"+items.length);
    return (
        <>
  {ListTemplate}
        </>
    )
}
export default ItemList;

