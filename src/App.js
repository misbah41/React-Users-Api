
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import FriendDetail from './components/FriendDetail/FriendDetail';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail />
          </Route>
          <Route  path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
