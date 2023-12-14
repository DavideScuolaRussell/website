import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Test} from './pag1'
import {Home} from './home';
import { Test2 } from './pag2';
import { Test3 } from './pag3';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Socrate" component={Test}/>
        <Route exact path="/Fisici-Pluralisti" component={Test2}/>
        <Route exact path="/Sofisti" component={Test3}/>
      </Switch>
    </Router>
  );
}

export default App;
