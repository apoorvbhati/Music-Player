import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SongDetail from './pages/SongDetail';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/songs" />
      </Route>
      <Route path="/songs" exact>
        <HomePage />
      </Route>
      <Route path="/songs/:songId" >
        <SongDetail />
      </Route>
    </Switch>
  );
}

export default App;
