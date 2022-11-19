import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Bookmark } from "./components/Pages/Bookmark";
import { Question } from "./components/Pages/Question";
import { OverView } from "./components/Pages/OverView";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Bookmark" component={Bookmark} />
            <Route path="/OverView" component={OverView} />
            <Route path="/Question" component={Question} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
