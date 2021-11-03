
import { Button} from 'react-bootstrap';
import React, {useContext} from 'react';
import {CartContext} from './CartContext';
export function DelButton({ itemid }) {
    const { removeitem } = useContext(CartContext);

    return (
        <Button variant='outline-secondary' onClick={() => removeitem({ itemid })}>Eliminar Item</Button>
    );

}



export default DelButton;
