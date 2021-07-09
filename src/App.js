import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Homepage/Home';
import Detail from './components/Detailpage/Detail';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme(){
    setTheme( theme === 'light'? 'dark' : 'light')
  }

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:countryName" component={Detail} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
