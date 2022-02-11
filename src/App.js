import Header from './page/Header'
import Nav from './page/Nav'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Html from './page/Html';
import JavaScript from './page/JavaScript';
import Css from './page/Css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">   
        <Header />
        <div className="m-contain">
          <Nav />
          <div className="router">
            <Route path="/my-inter/html" component={Html} />
            <Route path="/my-inter/css" component={Css} />
            <Route path="/my-inter/javascript" component={JavaScript}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
