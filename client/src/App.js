import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./App/components/Navbar";
import Home from "./App/Home";
import CustomerHome from "./App/CustomerHome";
import TransactionHome from "./App/TransactionHome";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={CustomerHome} />
          <Route path="/transactions" component={TransactionHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
