*Entrega Final*

*Introducción*

Proyecto basado en la tecnología ReactJs para desarrollar un ecommerce de Frutos Secos. Los datos se almacenan en Firestore donde podremos ver la información del usuario que se le solicita para generar el código de orden. El usuario es capaz de agregar la cantidad de items que desee según disponibilidad y podrá verlos en el carrito donde finalizará su compra.

*Requerimientos*

Bootstrap: npm install bootstrap react-bootstrap

Firebase: npm install firebase@8.9.1

Router-dom: npm install react-router-dom

Una vez instalados los paquetes señalados anteriormente el proyecto debería poder ejecutarse.

*Estructura de Datos*

La App guarda datos de tipo item que describen los mismopara la venta y orders que son las que realizan los clientes. Por ejemplo:
    {
        "id":2,
        "title":"Berenjena seca",
        "description":"Esta verdura seca es una bomba de vitaminas, perfectas para acompañar arroz, salsa, sopa y casuela. La berenjena es un super alimento super nutritivo y de verdad hace un cambio en la vida de las personas que la incorporan en su dieta haz ese cambio ahora. Duración estimada 3 años",
        "price":5000,
        "categoryid":1,
        "stock":3,
        "pictureurl":"https://thefreerangelife.com/wp-content/uploads/2013/09/IMG_0453.jpg"
    }

La App guarda la orden del cliente y crea lo siguiente en Firestore:
buyer
apellido: "a"
email: "a"
name: "a"
phone: "54..."
date: 30 de octubre de 2021, 12:20:28 UTC-3
items
0
cantidad: 3
id: "3"
name: "Manzana Seca"
price: 5000
1
cantidad: 1
id: "2"
name: "Berenjena seca"
price: 5000
total: 20000

*La Demo la podrá visualizar aquí:*
https://friendly-bohr-957027.netlify.app/