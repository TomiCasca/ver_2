
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer.js'
 import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart';



    function App() {
  return (


      <BrowserRouter>
             <NavBar/>
    <Switch>
        <Route exact path="/">
            <ItemListContainer name="Escoger Producto a Comprar"/>
                </Route>
                    <Route path="/categories/:categoryid">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/categories">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/item/:itemid">
                        <ItemDetailContainer/>
      </Route>
                    <Route path="/cart">
                        <Cart/>
                        </Route>
                        </Switch>
      <header className="App-header">
      </header>
          </BrowserRouter>
          );
}



export default App;
