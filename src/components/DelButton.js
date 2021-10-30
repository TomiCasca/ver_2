
import { Badge,Table,Button} from 'react-bootstrap';
import React, {useState,useEffect,useContext,createContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";
export const DelButton = ({itemid}) => {
const {removeitem}=useContext(CartContext);
console.log("Estoy en DelButton con itemid:"+itemid);

return(
    <Button   variant='outline-secondary' onClick={()=>removeitem({itemid})}>Eliminar Item</Button>
)

};



export default DelButton;
