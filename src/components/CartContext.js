
import React,{createContext,useState} from 'react';
export const  CartContext=createContext({});
export function CartProvider({ children }) {
    const [carts, setCarts] = useState([]);


    function additem({ productname }, { itemid }, { count }, { itemprice }) {
        setCarts([...carts, { itemid, productname, count, itemprice }]);
    }
    function removeitem({ itemid }) {
        setCarts(carts.filter(cart => cart.itemid != itemid));
    }

    function cartlength() {
        let sum, i;
        sum = 0;
        i = 0;
        if (carts.length) {
            while (i < carts.length) {
                sum = carts[i].count + sum;
                i++;
            }
            return sum;
        }
        else {
            return 0;
        }
    }

    const clear = () => {
        setCarts([]);
    };


    const total = () => {

        let sum, i;
        sum = 0;
        i = 0;
        if (carts.length) {

            while (i < carts.length) {
                sum = carts[i].count * carts[i].itemprice + sum;
                i++;
            }
            return sum;
        }
        else {
            return 0;
        }

    };

    const isInCartIndex = ({ itemid }) => {
        let i = 0;

        if (carts.length) {


            while (i < carts.length) {
                if (carts[i].itemid === itemid)
                    return i;

                i++;
            }

            return false;

        }


        else {
            return false;

        }

    };





    return <CartContext.Provider value={{ carts, additem, removeitem, cartlength, clear, total, isInCartIndex }}> {children}
    </CartContext.Provider>;
}
