import 'assets/css/app.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from 'page/HomePage';
import Details from 'page/Details';
import Cart from 'page/Cart';
import Congratulations from 'page/Congratulations';
import NotFound from 'page/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/:idc" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulations" component={Congratulations} />
          <Route path="*" component={NotFound} />
          </Switch>  
      </Router>
    </div>
  );
}

export default App;
