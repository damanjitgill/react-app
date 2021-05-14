import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Home} from './components/Home'
import {Page1} from './components/Page1'
import {Page3} from './components/Page3'
import {Result} from './components/Result'
import {Major} from './components/Major'
import {Page4} from './components/Page4'
import {Footer} from './components/Footer'




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Degree' component={Page1} />
        <Route exact path='/Major' component={Major} />
        <Route exact path='/Courses' component={Page3} />
        <Route exact path='/Load' component={Page4} />
        <Route  path='/Result' component={Result} />
        
        
        <Redirect to ="/" />
      </Switch>
      <Footer />
     
    </div>
  );
}

export default App;
