import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./pages/Front";
import ProductsList from './pages/ProductsList';
import CustomerProfile from './pages/CustomerProfile';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Front />
          </Route>
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/profile">
            <CustomerProfile />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
