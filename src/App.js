import React, {useEffect, useState} from 'react'
import './App.css';
import News from './Pages/News/News';
import Tech from './Pages/Tech/Tech';
import Home from './Pages/Home/Home';
import Fashion from './Pages/Fashion/Fashion';
import Sports from './Pages/Sports/Sports';
import Gaming from './Pages/Gaming/Gaming';
import Locations from './Pages/Locations/Locations';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Loading from './Loading'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <>
    {loading === false ? (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/locations" component={Locations} />
            <Route path="/news" component={News} />
            <Route path="/tech" component={Tech} />
            <Route path="/sports" component={Sports} />
            <Route path="/gaming" component={Gaming} />
            <Route path="/fashion" component={Fashion}/>
          </Switch>
        </div>
      </Router>
      ) : (
        <Loading />
      )
      }
    </>
  );
}

export default App;
