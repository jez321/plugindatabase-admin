import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Index from './components/Index/Index'
import Plugins from './components/Plugins/Plugins'
import Companies from './components/Companies/Companies'
import Tags from './components/Tags/Tags'
import Deals from './components/Deals/Deals'
import api from '../src/api/api'
import './App.scss';

function AppRouter() {
  return (
    <Router>
      <header class="header-top">
        PluginDatabase Admin
      </header>
      <div class="App">
        <nav class="nav-side">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/deals/">Deals</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/plugins/">Plugins</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/companies/">Companies</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/tags/">Tags</NavLink>
            </li>
          </ul>
        </nav>
        <section className="content">
          <Route path="/" exact component={Index} />
          <Route path="/deals/" component={Deals} />
          <Route path="/plugins/" component={Plugins} />
          <Route path="/companies/" component={Companies} />
          <Route path="/tags/" component={Tags} />
        </section>
      </div>
    </Router>
  );
}

export default AppRouter;