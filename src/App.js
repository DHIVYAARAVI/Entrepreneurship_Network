import './App.css';
import Home from './components/Home'
import Login from './components/Login';
import Online from './components/Online';
import Web from './components/Web';
import Language from './components/Language';
import Marketing from './components/Marketing';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/online" exact component={Online}/>        
        <Route path="/web" exact component={Web}/>      
        <Route path="/languages" exact component={Language}/>      
        <Route path="/marketing" exact component={Marketing}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
