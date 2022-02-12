import Header from "./page/Header";
import Nav from "./page/Nav";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Html from "./page/Html";
import JavaScript from "./page/JavaScript";
import Css1 from "./page/Css/01";
import Css2 from "./page/Css/02";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="m-contain">
          <Nav />
          <div className="router">
            <Route path="/my-inter/html" component={Html} />
            <Route path="/my-inter/css1" component={Css1} />
            <Route path="/my-inter/css2" component={Css2} />
            <Route path="/my-inter/javascript" component={JavaScript} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
