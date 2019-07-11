import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './components/Index/Index'
import Plugins from './components/Plugins/Plugins'
import Companies from './components/Companies/Companies'
import api from '../src/api/api'
import './App.css';

function AppRouter() {
  return (
    <Router>
      <div class="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plugins/">Plugins</Link>
            </li>
            <li>
              <Link to="/companies/">Companies</Link>
            </li>
          </ul>
        </nav>
        <section className="content">
          <Route path="/" exact component={Index} />
          <Route path="/plugins/" component={Plugins} />
          <Route path="/companies/" component={Companies} />
        </section>
      </div>
    </Router>
  );
}

export default AppRouter;