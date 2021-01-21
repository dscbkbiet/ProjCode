import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <span id="forkongithub">
          <a href="#">Fork me on GitHub</a>
      </span>

      
      <div className="Tabs">
        {/* <Router> */}
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
            </div>
            </div>
        </div>
    )
}

export default Home
