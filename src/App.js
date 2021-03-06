import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CalculatorApp from './CalculatorApp';
import TemperatureConvertor from './TemperatureConvertor'




function App() {
  return (
    

    <div className="App">
      <span id="forkongithub">
          <a href="#">Fork me on GitHub</a>
      </span>

      
      <div className="Tabs">
        <Router>
          <div>
            <nav>
              <ul>
                <li className="Links">
                  <Link className="list" to="/calculator">Calculator</Link>
                </li>
                <li className="Links">
                  <Link className="list" to="/temperatureconvertor">Temperature Convertor</Link>
                </li>
                <li className="Links">
                  <Link className="list" to="/agecalculator">Age Calculator</Link>
                </li>
                <li className="Links">
                  <Link className="list" to="/calculator">Calculator</Link>
                </li>
                <li className="Links">
                  <Link className="list" to="/temperatureconvertor">Temperature Convertor</Link>
                </li>
                <li className="Links">
                  <Link className="list" to="/agecalculator">Age Calculator</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/calculator">
                 <CalculatorApp /> 
              </Route>
              <Route path="/temperatureconvertor">
                <TemperatureConvertor />
              </Route>
              <Route path="/agecalculator">
                {/* <AgeCalculator /> */}
              </Route>
              <Route path="/calculator">
                {/* <Calculator /> */}
              </Route>
              <Route path="/temperatureconvertor">
                {/* <TemperatureConvertor /> */}
              </Route>
              <Route path="/agecalculator">
                {/* <AgeCalculator /> */}
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    </div>
  );
}

export default App;
