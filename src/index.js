import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Misc from './components/Misc.js';
import Resume from './components/Resume.js';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Switch
} from "react-router-dom";

// const prefix = "/silkysingh"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/silkysingh/" component={App}/>
        <Route exact path="/silkysingh/about" component={About}/>
        <Route exact path="/silkysingh/resume" component={Resume}/>
        <Route exact path="/silkysingh/misc" component={Misc}/>
        <Route exact path="/silkysingh/blog" component={Blog}/>

      </Switch>
    {/* <App /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
