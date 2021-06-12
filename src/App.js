import './App.css';
import News from './Pages/News/News';
import Tech from './Pages/Tech/Tech';
import Home from './Pages/Home/Home';
import Fashion from './Pages/Fashion/Fashion';
import Sports from './Pages/Sports/Sports';
import Gaming from './Pages/Gaming/Gaming';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/locations" />
          <Route path="/news" component={News} />
          <Route path="/tech" component={Tech} />
          <Route path="/sports" component={Sports} />
          <Route path="/gaming" component={Gaming} />
          <Route path="/fashion" component={Fashion}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
