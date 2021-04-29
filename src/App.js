import './App.css';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';
import About from './About';
import Careers from './Careers';
import Event from './Event';
import Products from './Products';
import Support from './Support';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Switch className='flex-container'>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/careers'>
            <Careers />
          </Route>
          <Route path='/event'>
            <Event />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path="/">
            <Hero />
            <Content />
          </Route>
        </Switch>
        <Footer />

      </div>

    </Router>
  );
}

export default App;
