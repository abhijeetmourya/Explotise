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
import India from './Pages/Locations/Pages/India/India';
import France from './Pages/Locations/Pages/France/France';
import England from './Pages/Locations/Pages/England/England';
import Italy from './Pages/Locations/Pages/Italy/Italy';
import Canada from './Pages/Locations/Pages/Canada/Canada';
import Singapore from './Pages/Locations/Pages/Singapore/Singapore'
import Maldives from './Pages/Locations/Pages/Maldives/Maldives'
import UAE from './Pages/Locations/Pages/UAE/UAE'
import USA from './Pages/Locations/Pages/USA/USA'
import Switzerland from './Pages/Locations/Pages/Switzerland/Switzerland'

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
            <Route path="/india" component={India} />
            <Route path="/france" component={France} />
            <Route path="/canada" component={Canada} />
            <Route path="/england" component={England} />
            <Route path="/singapore" component={Singapore} />
            <Route path="/italy" component={Italy} />
            <Route path="/switzerland" component={Switzerland} />
            <Route path="/uae" component={UAE} />
            <Route path="/usa" component={USA} />
            <Route path="/maldives" component={Maldives} />
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
