import { Nav} from 'react-bootstrap';
import cart from './cart.jpg'
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";
import React, {useContext} from 'react';
export const Carrito = () => {


const {cartlength}=useContext(CartContext);
    return (


        <Nav.Link href='#'> Cantidad de items en carrito :{ cartlength()>0 && cartlength()}
                <Link  to={'/cart'}>
            <img src={cart} alt="logo" width="30"></img> </Link>
                </Nav.Link>

   )
}






