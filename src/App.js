
import './App.css';
import Error from './component/Error/Error';
import { BrowserRouter as Router, Switch ,Route,Link } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path ='/'>
           <Home></Home>
          </Route>
          <Route path ='/home'>
           <Home></Home>
          </Route>

          <Route path ='/service'>
            <Service></Service>
          </Route>

          <Route path ='/about'>
           <About></About>
          </Route>

          <Route path ='/contact'>
           <Contact></Contact>
          </Route>


          <Route path ='*'>
          <Error></Error>
          </Route>
        </Switch>
        
      </Router>
      
  
    </div>
  );
}

export default App;
