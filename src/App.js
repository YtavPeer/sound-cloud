import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SoundApp } from './pages/SoundApp';
import { SoundDetails } from './pages/SoundDetails';
import { SoundHistory } from './pages/SoundHistory';
import { SoundHeader } from './cmps/SoundHeader';
import {NotFound} from './pages/NotFound';
import './App.scss';

function App() {

  return (
    <div className="App main-container">
      <Router>
        <SoundHeader></SoundHeader>
        <Switch>
          <Route component={SoundDetails} path='/sound/:id'></Route>
          <Route component={SoundHistory} path='/history'></Route>
          <Route component={SoundApp} exact path='/'></Route>
          <Route component={NotFound} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
