import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Index from './components/Index/Index'
import Plugins from './components/Plugins/Plugins'
import Companies from './components/Companies/Companies'
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
              <NavLink activeClassName="active" to="/plugins/">Plugins</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/companies/">Companies</NavLink>
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