
import {ItemDetail} from './ItemDetail';
import {useParams} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import {getFirestore} from '../firebase';

function ItemDetailContainer({ id }) {
    const [item, setItem] = useState([]);
    const [flag, setFlag] = useState(true);
    const { itemid } = useParams([]);
    useEffect(() => {
        const db = getFirestore();
        if (itemid) {
            const highprice = db.collection("items").where('id', '==', parseInt(itemid));
            highprice.get().then((querySnapshot) => {
                if (querySnapshot.size == 0) {
                    setFlag(false);
                }

                setItem(querySnapshot.docs.map(doc => doc.data()));
            }).catch((_error) => {
            }).finally(() => {
            });

        }

        else {
            const highprice = db.collection("items").where('id', '==', parseInt(id));
            highprice.get().then((querySnapshot) => {
                if (querySnapshot.size == 0) {
                    console.log("No results!");
                    setFlag(false);
                }
                setItem(querySnapshot.docs.map(doc => doc.data()));
                setFlag(true);
            }).catch((error) => {
                console.log("Error searching items", error);
            }).finally(() => {
                setFlag(true);
            });
        }

    }, [itemid]);

    if (item.length)
        console.log("items en item container:" + item[0].title);



    if (flag) {

        return (
            <div class="p-3 mb-2 bg-dark text-white">
                <ItemDetail jsonpack={item[0]} />
            </div>
        );

    }

    else {
        return (
            <>
                <div class="p-3 mb-2 bg-dark text-white">
                    <h1>        El itemid ingresado no existe por favor ingresar un itemid que exista</h1>
                </div>

            </>
        );
    }



}
export default ItemDetailContainer;
