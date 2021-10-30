import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCQ7WpIh2UPVRLIOkAMFh2Z_nPvXHw2rpw",
    authDomain: "coderhouse-react-tomas.firebaseapp.com",
    projectId: "coderhouse-react-tomas",
    storageBucket: "coderhouse-react-tomas.appspot.com",
    messagingSenderId: "693201522419",
    appId: "1:693201522419:web:2c744608e3e4de7fcab186"
};


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}

