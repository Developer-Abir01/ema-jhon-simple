import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventorty from './component/Inventory/Inventorty';
import NotFound from './component/NotFound';
import ProducatDetail from './component/ProducatDetail/ProducatDetail';


function App() {
  return (
    <div>
     <Header></Header>
    <Router>
    
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
        <Review></Review>
        </Route>
        <Route path="/inventory">
          <Inventorty></Inventorty>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProducatDetail></ProducatDetail>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>

        </Route>
      </Switch>
    </Router>
  
    </div>
  );
}

export default App;
