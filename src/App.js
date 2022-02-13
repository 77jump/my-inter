import Header from "./page/Header";
import Nav from "./page/Nav";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Html from "./page/Html";
import JavaScript1 from "./page/JavaScript/01";
import JavaScript2 from "./page/JavaScript/02";
import Css1 from "./page/Css/01";
import Css2 from "./page/Css/02";
import Http from "./page/Http";
import Vue from "./page/Vue";
import Webpack from "./page/Webpack";
import Optimization from "./page/Optimization";
import Browser from "./page/Browser";

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
            <Route path="/my-inter/js1" component={JavaScript1} />
            <Route path="/my-inter/js2" component={JavaScript2} />
            <Route path="/my-inter/http" component={Http} />
            <Route path="/my-inter/vue" component={Vue} />
            <Route path="/my-inter/webpack" component={Webpack} />
            <Route path="/my-inter/optimization" component={Optimization} />
            <Route path="/my-inter/browser" component={Browser} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
