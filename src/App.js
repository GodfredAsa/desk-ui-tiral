// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
    <div className="App">
        <div className="content">
            <Switch> 
                <Route exact path="/"> <Login/> </Route>
                <Route path="/booking"> <Booking/> </Route>
                <Route path="*"> <NotFound/></Route>
            </Switch>
        </div>
  </div>
</Router>
  );
}

export default App;
