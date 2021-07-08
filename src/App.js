import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Homepage/Home';
import Detail from './components/Detailpage/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:countryName" component={Detail} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
