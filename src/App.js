import React from 'react';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Post from './Components/Post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/about" component={About} exact />
          <Route path="/:post_id" component={Post} exact />
        </Switch>
      </div>

    </BrowserRouter>

  );
}

export default App;
