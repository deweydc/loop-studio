import './App.css';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';
import About from './About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">

        <Hero />
        <Content />
        <Footer />

        <About />

      </div>




    </Router>
  );
}

export default App;
